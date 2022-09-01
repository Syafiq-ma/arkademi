import React from 'react'
import Bisnis from '../Components/Bisnis'
import FlashSale from '../Components/FlashSale'
import Kategori from '../Components/Kategori'
import KategoriPopuler from '../Components/KategoriPopuler'
import Lembaga from '../Components/Lembaga'
import Navbar from '../Components/Navbar'
import PengembanganKarier from '../Components/PengembanganKarir'
import Promo from '../Components/Promo'
import Slider from '../Components/Slider'
import Spesialisasi from '../Components/Spesialisasi'
import Terbaru from '../Components/Terbaru'
import Trending from '../Components/Trending'

const Homepage = () => {
    return(
        <div>
            <Navbar/>
            <Kategori/>
            <Slider/>
            <Spesialisasi/>
            <Trending/>
            <FlashSale/>
            <KategoriPopuler/>
            <Promo/>
            <Lembaga/>
            <Terbaru/>
            <Bisnis/>
            <PengembanganKarier/>
        </div>
    )
}

export default Homepage