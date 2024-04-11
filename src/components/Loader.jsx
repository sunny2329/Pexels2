import React from 'react'
import load from '../../loader.gif'
function Loader() {
    return (
        <div className='loader-container'>
            <img src={load} alt="loader" className="loader"/>
        </div>
    )
}

export default Loader
