import React from 'react'
import Bisnis from '../assets/Bisnis.png'
import Keuangan from '../assets/Keuangan.png'
import PengembanganKarier from '../assets/Pengembangan Karir.png'
import Sertifikasi from '../assets/Sertifikasi.png'
import Teknologi from '../assets/Teknologi.png'
import Hobi from '../assets/Hobi.png'
import Bahasa from '../assets/Bahasa.png'
import SmallCard from './SmallCard'

const KategoriPopuler = () => {
    const data = [
        {title: 'Bisnis', image: Bisnis},
        {title: 'Keuangan', image: Keuangan},
        {title: 'Pengembangan Karier', image: PengembanganKarier},
        {title: 'Sertifikasi', image: Sertifikasi},
        {title: 'Teknologi', image: Teknologi},
        {title: 'Hobi', image: Hobi},
        {title: 'Bahasa', image: Bahasa},
    ]
    return(
        <div className='md:px-28 px-4 mt-16'>
            <div className='font-extrabold text-xl mb-7'>Kategori Terpopuler</div>
            <div className='flex flex-wrap gap-4'>
                {data.map((data,i)=>(
                    <SmallCard data={data} key={i}/>
                ))}
            </div>
            <div className='flex justify-center mt-9'>
                <button className='border px-5 py-2 rounded-md mx-auto' style={{borderColor: '#2BA0E7', color:'#1E96E0'}}>Lihat Semua Kategori</button>
            </div>
        </div>
    )
}

export default KategoriPopuler