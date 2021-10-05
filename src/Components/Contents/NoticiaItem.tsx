import React from 'react'
import { useHistory } from 'react-router'
import { Noticia } from './Noticia'

interface Props {
    noticia: Noticia
}

export const NoticiaItem = ({noticia}: Props) => {

    const history = useHistory();

    return (
        <div className="col-md-4 p-2" >
            <div className="card card-body" onClick={() => history.push(`/noticia/${noticia.id}`)}>
                <h2 className="text-center mx-2 text-capitalize" >{noticia.name}</h2>
                <p className="text-center" >{noticia.description}</p>
                <div className="d-flex flex-row text-muted">
                    <div className="blockquote-footer m-auto">{noticia.category}</div>
                    <div className="">2 Dias</div>
                </div>
            </div>
        </div>
    )
}
