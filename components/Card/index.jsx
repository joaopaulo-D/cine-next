const Card = props => {
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/original${props.image}`} alt="" width="150"/>
            <p>{props.title}</p>
        </div>
    )
}

export default Card