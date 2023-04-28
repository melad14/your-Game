import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function GameDetails() {
    const [gameDetails, setGameDetails] = useState([])


    let params = useParams();

    async function getGameDetails() {

        let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`, {
            headers: {
                'X-RapidAPI-Key':
                    `b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68`,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        console.log(data);
        setGameDetails(data)
    }


    useEffect(() => {

        getGameDetails();

    }, [])

    {
        let Requirements = gameDetails.minimum_system_requirements
        if (Requirements !== undefined) {
            var graphics = Requirements.graphics
            var memory = Requirements.memory
            var os = Requirements.os
            var processor = Requirements.processor
            var storage = Requirements.storage
        }
    }


    return <>

        <div className='row'>



            <div className="col-md-4">
                <div className="child">
                    <img src={gameDetails.thumbnail} className='w-100 m-3' alt="" />
                    <div className="row">
                        <div className="col-md-4 text-center py-2">
                            <button className='btn bg-black text-light'>free</button>
                        </div>
                        <div className="col-md-8 text-center pt-2  "> <button className='btn bg-light-main w-100'>free </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="col-md-8">
                <h2> {gameDetails.title}</h2>

                <h4>about {gameDetails.title}</h4>
                <p>{gameDetails.description}</p>

                <h3>Minimum System Requirements</h3>
                <h6>graphics : {graphics}</h6>
                <h6>memory : {memory}</h6>
                <h6>os : {os}</h6>
                <h6>processor : {processor}</h6>
                <h6>Storage : {storage}</h6>


                <h2 className="my-4">Additional Information</h2>
                <div className="row mb-5 mt-2">
                    <div className=" col-md-4">
                        <span className="text-muted">
                            Title
                            <br />
                        </span>
                        <p className="small">{gameDetails.title}</p>
                    </div>
                    <div className=" col-md-4">
                        <span className="text-muted">
                            Developer
                            <br />
                        </span>
                        <p className="small">{gameDetails.developer}</p>
                    </div>
                    <div className=" col-md-4">
                        <span className="text-muted">
                            Publisher
                            <br />
                        </span>
                        <p className="small">{gameDetails.publisher}</p>
                    </div>
                    <div className=" col-md-4">
                        <span className="text-muted">
                            Release Date
                            <br />
                        </span>
                        <p className="small">{gameDetails.release_date}</p>
                    </div>
                    <div className=" col-md-4">
                        <span className="text-muted">
                            Genre
                            <br />
                        </span>
                        <p className="small">{gameDetails.genre}</p>
                    </div>
                    <div className=" col-md-4">
                        <span className="text-muted">
                            Platform
                            <br />
                        </span>
                        <p className="small">

                            <i className="fab fa-windows me-1"></i> Windows
                            {gameDetails.Windows}
                        </p>
                    </div>
                </div>


            </div>

        </div>


    </>
}