
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import {  useEffect, useContext } from 'react'
import jwtDecode from 'jwt-decode'
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import All from './component/All/All';
import Registration from './component/Registration/Registration'
import Login from './component/Login/Login'
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import GameDetails from './component/GameDetails/GameDetails';
import InverseProtectedRoute from './component/inverseProtectedRouter/InverseProtectedRoute.jsx';
import NotFound from './component/NotFound/NotFound.jsx';
import MediaContextProvider from './component/Context/Store.jsx';
import { AuthContext } from './component/Context/AuthContext.jsx';
import Action from './component/Category/Action/Action.jsx';
import Zombie from './component/Category/Zombie/Zombie';
import Sports from './component/Category/Sports/Sports';
import Social from './component/Category/Social/Social.jsx';
import Shooter from './component/Category/Shooter/Shooter.jsx';
import Racing from './component/Category/Racing/Racing.jsx';
import OpenWorld from './component/Category/OpenWorld/OpenWorld.jsx';
import Fight from './component/Category/Fight/Fight.jsx';
import Fantasy from './component/Category/Fantasy/Fantasy.jsx';
import Battle from './component/Category/Battle/Battle.jsx';
import ActionRBG from './component/Category/ActionRBG/ActionRBG.jsx';
import ReleaseData from './component/SortBy/ReleaseDate/ReleaseDate.jsx';
import Popularity from './component/SortBy/Popularity/Popularity.jsx';
import Alphabetical from './component/SortBy/Alphabetical/Alphabetical.jsx';
import Relevance from './component/SortBy/Relevance/Relevance.jsx';
import Browser from './component/Platforms/Browser/Browser';
import Pc from './component/Platforms/Pc/Pc';


function App() {


  let{userData,setUserData}=useContext(AuthContext)
  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {

      saveUserData();}

  }, [])

  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken')
    let decodedToken = jwtDecode(encodedToken)
    setUserData(decodedToken)
  }

  function logOut() {
    localStorage.removeItem('userToken')
    setUserData(null)
    return <Navigate to='/login' />
  }



  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout logOut={logOut} userData={userData} />, children: [
        { index:true, element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Home /></ProtectedRoute> },
        { path: 'all', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><All /></ProtectedRoute> },
      
        { path: 'Category/action', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Action /></ProtectedRoute> },
        { path: 'Category/zombie', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Zombie/></ProtectedRoute> },
        { path: 'Category/sports', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Sports/></ProtectedRoute> },
        { path: 'Category/social', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Social/></ProtectedRoute> },
        { path: 'Category/shooter', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Shooter/></ProtectedRoute> },
        { path: 'Category/racing', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Racing/></ProtectedRoute> },
        { path: 'Category/openworld', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><OpenWorld/></ProtectedRoute> },
        { path: 'Category/fight', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Fight/></ProtectedRoute> },
        { path: 'Category/fantasy', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Fantasy/></ProtectedRoute> },
        { path: 'Category/battle', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Battle/></ProtectedRoute> },
        { path: 'Category/actionrbg', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><ActionRBG/></ProtectedRoute> },
       
        { path: 'sort-by/release-date', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><ReleaseData/></ProtectedRoute> },
        { path: 'sort-by/popularity', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Popularity/></ProtectedRoute> },
        { path: 'sort-by/alphbetical', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Alphabetical/></ProtectedRoute> },
        { path: 'sort-by/relevance', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Relevance/></ProtectedRoute> },
       
        { path: 'Platforms/browser', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Browser/></ProtectedRoute> },
        { path: 'Platforms/pc', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><Pc/></ProtectedRoute> },
       
        { path: 'GameDetails/:id', element: <ProtectedRoute saveUserData={saveUserData} userData={userData} ><GameDetails userData={userData}/></ProtectedRoute> },
        { path: 'registration', element: <InverseProtectedRoute><Registration /></InverseProtectedRoute>  },
        { path: 'login', element: <InverseProtectedRoute><Login saveUserData={saveUserData} /></InverseProtectedRoute>  },
        {path:'*', element: <NotFound/>}
    

      ]
    }

  ])


  return <>
  < MediaContextProvider>
    <RouterProvider router={routers} />
  </MediaContextProvider>
  </>
}

export default App;
