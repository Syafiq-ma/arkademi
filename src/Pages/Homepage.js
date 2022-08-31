import React from 'react'
import Kategori from '../Components/Kategori'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Spesialisasi from '../Components/Spesialisasi'

const Homepage = () => {
    return(
        <div>
            <Navbar/>
            <Kategori/>
            <Slider/>
            <Spesialisasi/>
        </div>
    )
}

export default Homepage