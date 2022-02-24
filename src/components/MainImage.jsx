import React from 'react'
import mainimg from '../Assets/edit.png'
import sideimg from '../Assets/Illustration 2.png'
import './mainimage.css'


const MainImage = () => {
  return (
            <div className='column is-flex is-8 '>
                <img className='imageprops' src={mainimg} alt="mainimage"></img>
                <div className='sideimg-div'>
                    <img style={{width: 200, height: 176.86}} className='sideimagaeprop' src={sideimg} alt="sideimage"></img>
                </div>
            </div>
  )
}

export default MainImage