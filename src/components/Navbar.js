import {useNavigate, Outlet, Link } from "react-router-dom";
import { newsCategory,countryCodes,isoToCountry } from "./Resource";
import {useState} from "react";

export function Navbar({country,setCountry,toSearch,setSearch}){
    const [search,newSearch]=useState('India')
    const navigate=useNavigate();
    const [toggle,setToggle]=useState(true)

    var handleSubmit=(e)=>{
        e.preventDefault();
        if(!toSearch)setSearch('India');
        else setSearch(search);
      }
    return(
        <>
        <nav className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 block sticky top-0 mb-3 overflow-hidden">
            <div className="text-2xl items-center font-bold p-4 mb-0 flex"><span className="p-2 text-sm sm:text-2xl bg-orange-400">News</span><span className="p-2 text-sm sm:text-2xl text-white bg-violet-500">Today</span></div>
            <h1 className="text-4xl font-serif font-bold hidden lg:block absolute top-5 left-[260px]">News Today -<span className="text-sm"> Your Daily Source for Informed Insights</span> </h1>
            <ul id='navbar-default' hidden={toggle} className='font-medium md:visible md:flex md:justify-center md:space-x-3 overflow-hidden  pb-1 text-md'>
            <li className='block p-2 hover:bg-purple-500 text-white' key='home'>
                <Link to="/">Home</Link>
            </li>
            { newsCategory.map(category =>{
               return(
               <li className='block p-2 hover:bg-purple-500 text-white' key={category}>
                    <Link to={`/${category}`}>{category}</Link>
                </li>
                )
            })
            }
            </ul>
        <form className='flex p-3 absolute right-10 top-1 space-x-1 ' onSubmit={handleSubmit}>   
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input id='srch' type="text" value={search} onChange={(e)=>newSearch(e.target.value)} className="rounded-xl p-1 pl-10 transition duration-1000 w-10 hover:w-[150px]  focus:w-[150px] lg:hover:w-[220px] lg:focus:w-[220px] border border-slate-100 ring-1 ring-blue-300 focus:outline-none focus:ring-blue-500"/>
            </div>
            <button className='rounded-2xl hidden xs:block ring-2  w-16  ring-blue-200 hover:ring-violet-400 font-mono bg-blue-100 hover:bg-violet-200 p-1 text-sm mx-2' type='submit' onClick={()=>navigate('/')}>search</button>
            <select id='cnry' className="rounded w-10 sm:w-16 text-xs" value={country} onChange={(e)=> setCountry(e.target.value)}>
                {
                    countryCodes.map((code)=>{
                        return(
                            <option key={code} value={code}>{isoToCountry[code]}</option>
                        )
                    })
                }
            </select>
        </form>
        
        <svg onClick={()=>setToggle(!toggle)}  className="block h-6 w-6 absolute right-0 top-3 md:collapse m-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
          
        </nav>
        <Outlet/>
        </>
    );
}
