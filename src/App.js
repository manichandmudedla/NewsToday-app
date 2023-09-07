import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NewsArticle } from './components/NewsArticle';
import {Category} from './components/Category';
import { newsCategory } from './components/Resource';
import { Nopage } from './components/Nopage';
import { useState, useEffect} from 'react';

function App() {
  const [search,newSearch]=useState('India')
  const [country,setCountry]=useState('in')

  const [toSearch,setSearch]=useState('India')
  const [news,updateNews]=useState([])
  
  var handleSubmit=(e)=>{
    e.preventDefault();
    if(!toSearch)setSearch('India');
    else setSearch(search);
  }
//db983a02b3d74b3aaeed49db9cab85c2
  useEffect(()=>{
    fetch(`https://newstoday-stayupdate.onrender.com/api?q=${toSearch}`).then(response=> response.json()).then(data=>{ updateNews(data.articles)}).catch(()=>console.log("somthing went wrong.."));
  },[toSearch])
  
  
  
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar search={search} newSearch={newSearch} country={country} setCountry={setCountry}  handleSubmit={handleSubmit}/>}>
          <Route index element={<NewsArticle news={news}/>} />
          {
            newsCategory.map(category=>{
              return(
                <Route key={category} path={category} element={<Category category={category} country={country}/>}/>
              )
            })
          }
          <Route path='*' element={<Nopage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
