import React from 'react'
import img1 from './image/Screenshot_2022-11-16_11-15-19.png'
import img2 from './image/Screenshot_2022-11-16_11-15-34.png'
import img3 from './image/Screenshot_2022-11-16_11-15-19.png'
export const Caursol = () => {
  return (
    <div>
     <div class="container">
    <div class="content">
        <div class="slideshow">
            <button class="slide-btn slide-btn-1"></button>
            <button class="slide-btn slide-btn-2"></button>
            <button class="slide-btn slide-btn-3"></button>

            <div class="slideshow-wrapper">
                <div class="slide">
                    <img className="slide-img" alt=''src={img1}/>
                    </div>
                    <div class="slide">
                    <img className="slide-img" alt=''src={img2}/>
                </div>
                <div class="slide">
             <img className="slide-img" alt=''src={img3}/>  
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}
