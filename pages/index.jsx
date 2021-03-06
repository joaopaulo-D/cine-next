import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Card from '../components/Card'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1>Filmes em Destaque</h1>
      </div>

      <div className={styles.search}>
        <Link href="/search">
          Buscar Filmes 
        </Link>
      </div>

      <div className={styles.card}>
        <ul>
          {props.list.map((item) => (
            <li key={item.id}>
              <a href={`/movie/${item.id}`}>
                <Card
                  image={item.poster_path}
                  title={item.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className={styles.footer}>
        <p>Desenvolvido Por João Paulo</p>
      </footer>
    </div>
  )
}

export async function getServerSideProps(){
  const response = await fetch("http://localhost:3000/api/trending")
  const json = await response.json()

  return{
    props: {
      list: json.list
    }
  }
}
