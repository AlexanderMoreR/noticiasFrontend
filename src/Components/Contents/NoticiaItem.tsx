import React from 'react'
import { Noticia } from './Noticia'

interface Props {
    noticia: Noticia
}

export const NoticiaItem = ({noticia}: Props) => {
    return (
        <div>
            <h1>{noticia.name}</h1>
            <h2>{noticia.description}</h2>
            <h5>{noticia.category}</h5>
        </div>
    )
}
