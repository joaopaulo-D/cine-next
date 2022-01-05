import styles from "../../styles/Home.module.css"

const MovieItem = props => {
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Filme: {props.desc.title}</h1>

                <img src={`https://image.tmdb.org/t/p/original${props.desc.backdrop_path}`} alt="" width={400}/>

                <p>{props.desc.overview}</p>

            </main>
        </div>
    )
}

export default MovieItem

export async function getServerSideProps(context){
    const response = await fetch(`http://localhost:3000/api/movie/${context.params.id}`)
    const json = await response.json()


    return{
        props: {
            desc: json.desc
        }
    }
}