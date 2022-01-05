import { Tmdb } from "../../config/tmdb";

export default async function(req, res){

    const response = await fetch(`${Tmdb.apiBase}/search/movie?api_key=${Tmdb.apikey}&language=pt-BR&query=${req.query.q}`)
    const json = await response.json()

    res.status(200).json({
        list: json.results
    })
}