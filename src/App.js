
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import All from './component/All/All';
import Registration from './component/Registration/Registration'
import Login from './component/Login/Login'
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import GameDetails from './component/GameDetails/GameDetails';
import InverseProtectedRoute from './component/inverseProtectedRouter/InverseProtectedRoute.jsx';
import NotFound from './component/NotFound/NotFound.jsx';
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
  let { saveUserData } = useContext(AuthContext)

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      saveUserData();
    }

  }, [])

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='your-Game' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='all' element={<ProtectedRoute><All /></ProtectedRoute>} />
          <Route path='Category/action' element={<ProtectedRoute><Zombie /></ProtectedRoute>} />
          <Route path='Category/zombie' element={<ProtectedRoute><Action /></ProtectedRoute>} />
          <Route path='Category/sports' element={<ProtectedRoute><Sports /></ProtectedRoute>} />
          <Route path='Category/social' element={<ProtectedRoute><Social /></ProtectedRoute>} />
          <Route path='Category/shooter' element={<ProtectedRoute><Shooter /></ProtectedRoute>} />
          <Route path='Category/racing' element={<ProtectedRoute><Racing /></ProtectedRoute>} />
          <Route path='Category/openworld' element={<ProtectedRoute><OpenWorld /></ProtectedRoute>} />
          <Route path='Category/fight' element={<ProtectedRoute><Fight /></ProtectedRoute>} />
          <Route path='Category/fantasy' element={<ProtectedRoute><Fantasy /></ProtectedRoute>} />
          <Route path='Category/battle' element={<ProtectedRoute><Battle /></ProtectedRoute>} />
          <Route path='Category/actionrbg' element={<ProtectedRoute><ActionRBG /></ProtectedRoute>} />

          <Route path='sort-by/release-date' element={<ProtectedRoute><ReleaseData /></ProtectedRoute>} />
          <Route path='sort-by/popularity' element={<ProtectedRoute><Popularity /></ProtectedRoute>} />
          <Route path='sort-by/alphbetical' element={<ProtectedRoute><Alphabetical /></ProtectedRoute>} />
          <Route path='sort-by/relevance' element={<ProtectedRoute><Relevance /></ProtectedRoute>} />

          <Route path='Platforms/browser' element={<ProtectedRoute><Browser /></ProtectedRoute>} />
          <Route path='Platforms/pc' element={<ProtectedRoute><Pc /></ProtectedRoute>} />

          <Route path='GameDetails/:id' element={<ProtectedRoute><GameDetails /></ProtectedRoute>} />

          <Route path='registration' element={<InverseProtectedRoute><Registration /></InverseProtectedRoute>} />
          <Route path='login' element={<InverseProtectedRoute><Login /></InverseProtectedRoute>} />
          <Route path='*' element={<NotFound />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
