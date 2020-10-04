import React, { useEffect, useState } from 'react'
import Unsplash from 'unsplash-js'

import Card from './components/card'

import './App.css'

function App () {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsplash = new Unsplash({
            accessKey: 'uhCsno1Jhf17u02EBSgaUIOWXML0MV5YZxlxQlOIQGY',
            secret: 'fyrPalbp64JcGFaLlzw4xqppDwYcDOs8b5Qus6dMH3A',
            callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
        })

        unsplash.search.photos('dog', 1, 40)
            .then(res => res.json())
            .then(json => {
                setData(json.results)
                setLoading(false)
            })
    }, [])


    return (
        <div className="container">
            <div className="row">
                {
                    loading ? <h1>Loading...</h1> : ( // не использую preloader, потому что в будущем планирую сделать отображение "заглушек" вместо фотографий как preloader
                        data.map(item => (
                            <Card item={item}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default App
