import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = (apiResponse) => {
    const {data = []} = apiResponse
    return data

}


export default async function  getTrendingTerms() {
    const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}`
    const res = await fetch(apiURL)
    const apiResponse = await res.json()
    console.log(apiResponse);
    return fromApiResponseToGifs(apiResponse)
}