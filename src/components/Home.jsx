import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Loader from './Loader'
import {ToastContainer, toast, Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Home({ images, load, setSaved, saved }) {

  const saveImage = (img) => {
    let flag = false;

    if (saved.length != null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = true;
          console.log('Image is already saved');
          toast.info("Image already saved", {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
          });
          break;
        }
      }
    }
    if (!flag) {
      setSaved([...saved, img])
      console.log("Image saved successfully");
      toast.success("Image saved successfully", {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      });
    }



    // setSaved([...saved, img])
  }

  return (
    <div className='main-container'>
      <ToastContainer/>
      {
        load ? (<Loader />) : (
          <div className='home' id='homes'>
            {
              images.map((image) => {
                return (
                  <div className='card' key={image.id}>
                    <img src={image.src.medium} alt={image.alt} className='card-img-top' onClick={() => saveImage(image)} />
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
        images.length != 0 && <div className="back" onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
            duration: 1000,
          });
        }}>Back To Top</div>
      }


    </div>

  )
}

export default Home
