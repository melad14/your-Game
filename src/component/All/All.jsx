import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../Context/Store.jsx'
import Loading from '../Loading/Loding.jsx'


export default function All() {

const{allGames,loading}=useContext(MediaContext)

  return <>
   {loading === true ? <Loading /> : null} 
  <div className="container">
     <div className="row">
      {allGames.map((game, index) => <div key={index} className="col-md-4  g-3 ">
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
   
    {/* <div className="row">
    {allGames.map((game,index)=><div key={index} className="col-md-4  g-3 ">
      <div className="child mx-2 regpart"><div>
    <img src={game.thumbnail} alt="" className='w-100' />
  </div>
  <div className="row">
    <div className="col-md-6"> <div className='p-3'>{game.title}</div>
    </div>
    <div className="col-md-6 text-center pt-2 "> <button className='btn bg-light-main '>free </button>
    </div>
  </div>
 
  </div>
  
</div>)}


  </div> */}
  </>
}