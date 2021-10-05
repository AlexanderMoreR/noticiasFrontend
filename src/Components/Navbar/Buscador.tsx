import React, { useState } from 'react'

export const Buscador = () => {

    const [dato ,setDato] = useState<String>('');

    const resolverBusqueda = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(dato);
    }

    return (
        <div>
            <form className="d-flex" onSubmit={resolverBusqueda}>
                <input className="form-control me-sm-2" type="text" placeholder="Buscar"
                    onChange={e => setDato(e.target.value)}
                />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </div>
    )
}
