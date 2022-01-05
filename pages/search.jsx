import React, { useState } from "react";
import styles from "../styles/Home.module.css";

import Card from "../components/Card";

export default function Search(){
    const [inputText, setInputText] = useState('');
    const [movieList, setMovieList] = useState([]);

    function handleOnChange(e){
        setInputText(e.target.value)
    }

    async function handleSubmit(){
        if(inputText !== ''){
            const response = await fetch(`http://localhost:3000/api/search?q=${inputText}`)
            const json = await response.json()

            setMovieList(json.list) 
        }
    }

    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h2 style={{ textAlign: 'center', marginTop: 35 }}>Pesquise seu Filme</h2>
                <input 
                    type="text" 
                    className={styles.input}
                    value={inputText}
                    onChange={(e) => handleOnChange(e)}
                    required
                />
                <button onClick={handleSubmit}>Pesquisar</button>
                
                <div className={styles.card}>
                    <ul>
                        {movieList.map(item => (
                            <>
                                <a href={`/movie/${item.id}`}>
                                    <li key={item.id}>
                                        <Card
                                            image={item.poster_path}
                                            title={item.title}
                                        />
                                    </li>
                                </a>
                            </>
                        ))}
                    </ul>
                </div>
                
            </main>
        </div>
    )
}