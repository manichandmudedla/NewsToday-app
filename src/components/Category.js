import { NewsArticle } from "./NewsArticle";
import React,{useState, useEffect } from "react";
export function Category({category,country}){
    const [news,updateNews]=useState([])
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2abe11e647cd45f0957adc6e0f2db6e4`).then(response=> response.json()).then(data=>{ updateNews(data.articles)}).catch(()=>console.log("somthing went wrong.."))
    },[country,category])
    return(
        <NewsArticle news={news}/>
    )
}