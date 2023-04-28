import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../Context/Store.jsx'
import Loading from '../Loading/Loding.jsx'

export default function Home() {


  const { allGames, loading } = useContext(MediaContext)

  return <>
    {loading === true ? <Loading /> : null}

    <div className='home-start '>
      <div className="container w-100 h-100 d-flex justify-content-center align-items-center ">
        <div className='text-center'><h1>Find & track the best <span className=" text-primary  ">free-to-play
        </span>  games!</h1><br /> <p>Track what you've played and search for what to play next! Plus get free premium loot!</p>
          <Link to='/all'> <button className='btn bordary text-light btn-outline-dark ' >browse games </button></Link>
        </div>


      </div>
    </div>
    <div className="row mb-5">
      <div className="d-flex align-content-center pt-3 ">

        <i className="fas fa-robot mr-2 fs-2 me-3"></i>
        <span className="h3 fw-bold mb-3 d-inline-block">
          Personalized Recommendations
        </span>
      </div>
      {allGames.splice(3, 3).map((game, index) => <div key={index} className="col-md-4  g-3 ">
        <Link to={'/GameDetails/' + game.id}> <div className="child mx-2 regpart"><div>
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
  </>
}
