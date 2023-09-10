import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NewsArticle } from './components/NewsArticle';
import {Category} from './components/Category';
import { newsCategory } from './components/Resource';
import { Nopage } from './components/Nopage';
import Footer from './components/Footer';
import { useState, useEffect} from 'react';

function App() {
  const [country,setCountry]=useState('in')

  const [toSearch,setSearch]=useState('India')
  const [news,updateNews]=useState([])
  const [isLoading,setLoading]=useState(true)

  
//db983a02b3d74b3aaeed49db9cab85c2
  useEffect(()=>{
    setLoading(true);
    fetch(`https://newstoday-stayupdate.onrender.com/api?q=${toSearch}`).then(response=> response.json()).then(data=>{setLoading(false); updateNews(data.articles);}).catch(()=>console.log("somthing went wrong.."));
    
  },[toSearch])
  
  console.log("app rendered");

  return(
    <div className='flex flex-col min-h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar country={country} setCountry={setCountry} toSearch={toSearch} setSearch={setSearch}/>}>
          <Route key='home' index element={<NewsArticle heading="News Today - Top Headlines" isLoading={isLoading} news={news}/>} />
          {
            newsCategory.map((category)=>{
              return(
                <Route key={category} path={category} element={<Category category={category} country={country}/>}/>
              )
            })
          }
          <Route path='*' element={<Nopage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App;
