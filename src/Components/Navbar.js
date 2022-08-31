import React from "react";
import logo from '../assets/Asset 4.png'
import searchIcon from '../assets/search.png'
import loveIcon from '../assets/Love.png'

const Navbar = () => {
    return(
        <div className="w-full md:px-28 px-4 xl:pb-0 pb-3" style={{background:'linear-gradient(192.48deg, #0977BE -120.7%, #1C88CE 285.22%)'}}>
            <div className="flex items-center justify-between h-14">
                <img src={logo} width={139}/>
                <label className="relative hidden w w-7/12 xl:block">
                    <input className="bg-white h-9 font-medium text-xs rounded-md ml-3 pl-4 w-full" placeholder="Cari kelas"></input>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3"><img src={searchIcon} width={14}/></span>
                </label>
                <div className="flex items-center">
                    <img src={loveIcon} width={18} className='mr-10'/>
                    <button className="rounded-md bg-white text-blue-100 py-2 px-5 font-bold text-sm mr-2">Masuk</button>
                    <button className="rounded-md bg-blue-300 text-white py-2 px-5 font-bold text-sm">Daftar</button>
                </div>
            </div>
            <label className="relative block w-full xl:hidden">
                <input className="bg-white h-9 font-medium text-xs rounded-md pl-4 w-full" placeholder="Cari kelas"></input>
                <span class="absolute inset-y-0 right-0 flex items-center pr-3"><img src={searchIcon} width={14}/></span>
            </label>
        </div>
    )
}

export default Navbar