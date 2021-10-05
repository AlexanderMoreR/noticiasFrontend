import React from 'react'
import { useParams } from 'react-router-dom'
import { Noticia } from './Noticia';
import * as noticiaService from './NoticiaService';

interface params {
    id: string;
}

export const MostrarNoticia = () => {

    const params = useParams<params>();

    const [noticia, setNoticia] = React.useState<Noticia>()

    React.useEffect(() => {
        const obtenerDatos = async (id: string) => {
            const res = await noticiaService.getNoticia(id);
            setNoticia(res.data)
        }
        obtenerDatos(params.id);
    }, [params.id])

    

    return (
        <div>
            <h1>{noticia?.name}</h1>
            <p>{noticia?.description}</p>
        </div>
    )
}
