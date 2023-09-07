import { NewsArticle } from "./NewsArticle";
import React,{useState, useEffect } from "react";
export function Category({category,country}){
    const [news,updateNews]=useState([])
    useEffect(()=>{
        fetch(`https://newstoday-stayupdate.onrender.com/api/category?country=${country}&category=${category}`).then(response=> response.json()).then(data=>{ updateNews(data.articles)}).catch(()=>console.log("somthing went wrong.."))
    },[country,category])
    return(
        <NewsArticle news={news}/>
    )
}