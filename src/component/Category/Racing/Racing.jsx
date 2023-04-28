import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from './../../Loading/Loding';

export default function Racing() {
  const [action, setAction] = useState([])
  const [loading, setLoading] = useState(true);
  async function getGames() {
  
    let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing`, {
        headers: {
            'X-RapidAPI-Key':
                `b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68`,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    setLoading(false)
    setAction(data)
}


useEffect(() => {

    getGames();
}, [])


  return (
    <>  
      {loading === true ? <Loading /> : null} 
<div className="container">
  <div className="row">
      {action.map((game, index) => <div key={index} className="col-md-4  g-3 ">
        <Link to={'/GameDetails/' + game.id}>
          <div className="child mx-2 regpart">
            <div>
              <img src={game.thumbnail} alt="" className='w-100' />
            </div>
            <div className="row">
              <div className="col-md-6"> <div className='p-3'>{game.title}</div>
              </div>
              <div className="col-md-6 text-center pt-2 "> <button className='btn bg-light-main '>free </button>
              </div>
            </div>

          </div></Link>

      </div>)}


    </div>
</div>


    
    </>
  );
}
