import React from 'react'
import './Main.css'
import shisha_choynak1 from './shisha-choynak1.webp'
import shisha_choynak2 from './shisha-choynak2.webp'
import bg_rasm from './orqa_foni_bor.webp'

function main() {

  

  return (
    <div className="main">
        <div className="main_navbar">
            <h1>Home</h1>
            <p>Go beyond filtration with a unique 2-step filtration and purification process for pure-tasting <br /> water sip after sip.</p>
        </div>
        <div className="main_img">
            <div className="main_img1">
                <img className='shisha_choynak1' src={shisha_choynak1} alt="" />
                <div className="rasm_yozuvi">
                <h1>LARQ Pitcher Pure Vis<span><sup>TM</sup></span></h1>
                <p>Monaco Blue</p>
                <p>From $168 $139 </p>
                </div>
            </div>
            <div className="main_img2">
            <img className='shisha_choynak2' src={shisha_choynak2} alt="" />
            <div className="rasm_yozuvi">
                <h1>LARQ Pitcher Pure Vis<span><sup>TM</sup></span></h1>
                <p>Monaco Blue</p>
                <p>From $168 $139 </p>
                </div>
            </div>
        </div>
        <div className="main_box">
            <div className="main_inbox1">
                <p>At-home purification</p>
                <h1>Who said practical had to be boring?</h1>
                <p>Nano Zero Filter technology delivers better-tasting coffee, tea, smoothies—everything—and looks good doing it.</p>
            </div>
            <div className="main_inbox2">
                <img className='bg_rasm' src={bg_rasm} alt="" />
            </div>
        </div>
    </div>
  )
}

export default main