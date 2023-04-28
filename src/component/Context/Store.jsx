import  { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const MediaContext = createContext('')

export default function MediaContextProvider(props) {

    const [loading, setLoading] = useState(true);
    const [allGames, setAllGames] = useState([])

    async function getGames() {
        let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
            headers: {
                'X-RapidAPI-Key':
                    `b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68`,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })

        setAllGames(data)
        setLoading(false)
    }


    useEffect(() => {

        getGames();
    }, [])


    return <MediaContext.Provider value={{allGames,loading}}>

        {props.children}

    </MediaContext.Provider>
}