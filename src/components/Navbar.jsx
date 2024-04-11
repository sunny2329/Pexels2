import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
function Navbar({ setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>

      <div className="nav">
        <div className="button btn btn-outline-primary border-green-600 text-green-500" onClick={() => {
          setSearch("nature")
          navigate('/')
          }}>Nature</div>
        <div className="button btn btn-outline-primary border-blue-500 text-blue-500" onClick={() =>
          {
            setSearch("travel")
            navigate('/')
          }
          }>Travel</div>
        <div className="button btn btn-outline-primary" onClick={() => {
          setSearch('city')
          navigate('/')
        }}>City</div>
        <div className="button btn btn-outline-primary border-red-400 text-red-400" onClick={() => {
          setSearch('cars')
          navigate('/')
        }}>Cars</div>
        <div className="button btn btn-outline-primary border-orange-500 text-orange-500" onClick={() => {
          setSearch('fashion')
          navigate('/')
        }}>Fashion</div>
        <div className="button btn btn-outline-primary border-purple-400 text-purple-400" onClick={() => {
          setSearch('animals')
          navigate('/')
        }}>Animals</div>
        <div className="button btn btn-outline-primary border-red-800 text-red-800" onClick={() => {
          setSearch('technology')
          navigate('/')
        }}>Technology</div>
        <div className="button btn btn-outline-primary border-yellow-400 text-yellow-400" onClick={() => {
          setSearch('business')
          navigate('/')
        }}>Business & Finance</div>
        <div className="button btn btn-outline-primary border-emerald-400 text-emerald-400" onClick={() => {
          setSearch('india')
          navigate('/')
        }}>India</div>
        <div className="button btn btn-outline-primary border-yellow-200 text-yellow-200" onClick={() => {
          setSearch('dubai')
          navigate('/')
        }}>Dubai</div>


        {location.pathname !== '/saved' ? (
          <div className="button btn btn-outline-primary bg-green-500 text-green-100 border-black" onClick={() => navigate('/saved')}>Saved</div>
        ) : (
          <div className="button btn btn-outline-primary bg-green-500 text-green-100 border-black" onClick={() => navigate('/')}>Home</div>
        )}

      </div>

      <div className="search">
        <input type='text' placeholder='Search for an image' className='inputs' onChange={(e) => {
          setSearch(e.target.value);
        }} />
      </div>

    </>
  )
}

export default Navbar
