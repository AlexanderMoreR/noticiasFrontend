import React, { useEffect, useState } from 'react';
import * as noticiaService from './NoticiaService';
import { Noticia } from './Noticia';
import { NoticiaItem } from './NoticiaItem';

export const ListaNoticias = () => {
    const [noticias, setNoticias] = useState<Noticia[]>([]);

    const loadNoticias = async () => {
        const res = await noticiaService.getNoticias();

        const nuevaNoticias = res.data.map(( noticia: Noticia ) => {
            return {
                ...noticia,
                createdAt: noticia.createdAt ? new Date(noticia.createdAt.toString()): new Date(),
            }
        })
        .sort((a: any, b: any)=> b.createdAt.getTime() - a.createdAt.getTime());

        setNoticias(nuevaNoticias);
    }

    useEffect(() => {
        loadNoticias();
    }, [])

    return (
        <div className="row" >
            {
                noticias.map(noticia => {
                    return <NoticiaItem  noticia={noticia} key={noticia.id?.toString()} />
                })
            }
        </div>
    )
}
