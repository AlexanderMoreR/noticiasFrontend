
export const getNoticias = async () => {
    const response = await fetch('http://[::1]:4000/noticias/');
    return await response.json();
}

export const getNoticia = async (id: string) => {
    const response = await fetch(`http://[::1]:4000/noticias/${id}`);
    return await response.json();
}