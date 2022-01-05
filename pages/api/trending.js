import { Tmdb } from "../../config/tmdb";

export default async function(req, res) {

    const response = await fetch(`${Tmdb.apiBase}/trending/movie/week?api_key=${Tmdb.apikey}&languagem=pt-BR`)
    const json = await response.json()

    res.status(200).json({
        list: json.results
    })
}