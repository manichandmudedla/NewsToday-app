import {useNavigate, Outlet, Link } from "react-router-dom";
import { newsCategory,countryCodes,isoToCountry } from "./Resource";

export function Navbar({search,newSearch,handleSubmit,country,setCountry}){
    const navigate=useNavigate();
    return(
        <>
        <nav className="bg-slate-100 flex items-center overflow-hidden">
            <div className=" text-2xl font-bold p-4"><span className="p-2 bg-orange-400">News</span><span className="p-2 text-white bg-violet-400">Today</span></div>
            <ul className='flex gap-3 p-3'>
            <li key='home'>
                <Link to="/">Home</Link>
            </li>
            { newsCategory.map(category =>{
               return(
               <li key={category}>
                    <Link to={`/${category}`}>{category}</Link>
                </li>
                )
            })
            }
            </ul>
        <form className='flex' onSubmit={handleSubmit}>   
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input type="text" value={search} onChange={(e)=>newSearch(e.target.value)} className="rounded-xl p-1 pl-10 w-[150px] sm:w-auto border border-slate-100 ring-1 ring-blue-300 focus:outline-none focus:ring-blue-500"/>
            </div>
            <button className='rounded-2xl ring-2 w-16  ring-blue-200 hover:ring-blue-300 font-mono bg-blue-100 hover:bg-blue-200 p-1 text-sm mx-2' type='submit' onClick={()=>navigate('/')}>search</button>
            <select value={country} onChange={(e)=> setCountry(e.target.value)}>
                {
                    countryCodes.map((code)=>{
                        return(
                            <option key={code} value={code}>{isoToCountry[code]}</option>
                        )
                    })
                }
            </select>
        </form>
        </nav>
        <Outlet/>
        </>
    );
}
