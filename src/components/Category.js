import { useState } from "react"
import { NewsArticle } from "./NewsArticle"
import { useEffect } from "react"
export function Category({category,country}){
    const [news,updateNews]=useState([])
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=db983a02b3d74b3aaeed49db9cab85c2`).then(response=> response.json()).then(data=>{ updateNews(data.articles)}).catch(()=>console.log("somthing went wrong.."))
    },[country,category])
    return(
        <NewsArticle news={news}/>
    )
}