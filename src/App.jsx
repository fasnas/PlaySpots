import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import VenueList from './Pages/VenueList'
import FavoritesPage from './Pages/FavoriteVenue'
import VenueDetails from './Pages/VenueDetailes'


const App = () => {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<VenueList/>}/>
         <Route path='/:id' element={<VenueDetails/>}/>
         <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </Router>


  )
}
export default App
