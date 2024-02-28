import React, { useState } from 'react';


export default function Login(){
    const [term, setTerm] = useState('')
    const [data, setData] = useState({});

    async function search(){
        const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${term}`)
        const responseJson = await response.json()
        console.log(responseJson)
        setData({
            character: responseJson[0].character,
            quote: responseJson[0].quote,
            image: responseJson[0].image
        })
    }

    return(
        <>
            <div>
                <input type="text" placeholder="Search" onChange={(e) => setTerm(e.target.value)} />
                <button type="submit" onClick={search}>Search</button>
                <hr/>
                {data.character && (
                    <div>
                        <img src={data.image} alt={data.character || ''} />
                        <p>{data.character || ''}</p>
                        <p>{data.quote || ''}</p>
                    </div>
                )}
            </div>
        </>
    )
}