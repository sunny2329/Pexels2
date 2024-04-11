import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useLocation } from 'react-router-dom'
function Saved({ saved, loader }) {
  const location = useLocation();
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(saved.length > 0)
  }, [saved])

  return (
    <div>
      {status ? (
        <div className='main-container'>

          {
            loader ? (<Loader />) : (
              <div className='home' id='homes'>
                {
                  saved.map((image) => {
                    return (
                      <div className='card' key={image.id}>
                        <img src={image.src.original} alt={image.alt} className='card-img-top' />
                        <div className='card-body'>
                          <h5 className='card-title'>{image.title}</h5>
                          <p className='card-text'>{image.description}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          }

          {
            saved.length != 0 && <div className="back" onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
                duration: 1000,
              });
            }}>Back To Top</div>
          }


        </div>
      ) : <div className='empty'>
        <h2>No Image is Stored</h2>
      </div>
      }


    </div>
  )
}

export default Saved
