import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = (apiResponse) => {
    const {data = []} = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []

}


export default async function getGifs({ keyword }) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    const res = await fetch(apiURL)
    const apiResponse = await res.json()
    return fromApiResponseToGifs(apiResponse)
}