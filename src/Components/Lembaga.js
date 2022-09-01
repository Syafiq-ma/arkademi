import React from 'react'
import MediaCiptaPrestasi from '../assets/MediaCiptaPrestasi.png'
import Rewata from '../assets/Rewata.png'
import Duta from '../assets/Duta.png'
import GadjahMada from '../assets/GadjahMada.png'
import GlobalBontang from '../assets/GlobalBontang.png'
import Binuri from '../assets/Binuri.png'
import SenjaHastaAzizan from '../assets/SenjaHastaAzizan.png'
import MitraPolri from '../assets/MitraPolri.png'
import SuryaComputer from '../assets/SuryaComputer.png'
import YesStudy from '../assets/YesStudy.png'
import SmartBrain from '../assets/SmartBrain.png'
import AvicenaCipta from '../assets/AvicenaCipta.png'
import MSI from '../assets/MSI.png'
import GlobalAntusias from '../assets/GlobalAntusias.png'
import SmallCard from './SmallCard'

const Lembaga = () => {
    const data = [
        {title: 'MEDIA CIPTA PRESTASI', image: MediaCiptaPrestasi},
        {title: 'REWATA CONSULTANT', image: Rewata},
        {title: 'LKP DUTA', image: Duta},
        {title: 'GADJAH MADA YOGYAKARTA', image: GadjahMada},
        {title: 'LPK GLOBAL BONTANG', image: GlobalBontang},
        {title: 'BINURI LEARNING CENTER', image: Binuri},
        {title: 'SENJA HASTA AZIZAN', image: SenjaHastaAzizan},
        {title: 'MITRA POLRI', image: MitraPolri},
        {title: 'SURYA COMPUTER', image: SuryaComputer},
        {title: 'YES STUDY', image: YesStudy},
        {title: 'SMART BRAIN', image: SmartBrain},
        {title: 'AVICENNA CIPTA TRAINING', image: AvicenaCipta},
        {title: 'LKP MSI', image: MSI},
        {title: 'GLOBAL ANTUSIAS SEMESTA', image: GlobalAntusias},
    ]
    return(
        <div className='md:px-28 px-4 mt-16'>
            <div className='flex justify-between'>
                <div className='font-extrabold text-xl mb-7'>Lembaga</div>
                <div className='font-extrabold text-base mr-24 text-blue-100'>Lihat Semua</div>
            </div>
            <div className='flex flex-wrap gap-4'>
                {data.map((data,i)=>(
                    <SmallCard data={data} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default Lembaga