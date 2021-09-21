
export const getNoticia = async () => {
    const response = await fetch('http://[::1]:4000/noticias/');
    return await response.json();
}