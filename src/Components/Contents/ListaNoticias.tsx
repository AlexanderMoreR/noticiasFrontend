import React, { useEffect, useState } from 'react';
import * as noticiaService from './NoticiaService';
import { Noticia } from './Noticia';
import { NoticiaItem } from './NoticiaItem';

export const ListaNoticias = () => {
    const [noticias, setNoticias] = useState<Noticia[]>([]);

    const loadNoticias = async () => {
        const res = await noticiaService.getNoticia();
        setNoticias(res.data);
    }

    useEffect(() => {
        loadNoticias();
    }, [])

    return (
        <div>
            {
                noticias.map(noticia => {
                    return <NoticiaItem noticia={noticia} />
                })
            }
        </div>
    )
}
