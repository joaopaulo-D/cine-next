import { Tmdb } from "../../../config/tmdb";

export default async function(req, res){

    const response = await fetch(`${Tmdb.apiBase}/movie/${req.query.id}?api_key=${Tmdb.apikey}&language=pt-BR`)
    const json = await response.json()

    res.status(200).json({
        desc: json
    })
}