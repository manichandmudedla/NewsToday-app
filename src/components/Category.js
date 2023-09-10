import { NewsArticle } from "./NewsArticle";
import React,{useState, useEffect } from "react";
export function Category({category,country}){
    const [news,updateNews]=useState([]);
    const [isLoading,setLoading]=useState(true);
    console.log(category);
    useEffect(()=>{
        setLoading(true);
        fetch(`https://newstoday-stayupdate.onrender.com/api/category?country=${country}&category=${category}`).then(response=> response.json()).then(data=>{setLoading(false); updateNews(data.articles);}).catch(()=>console.log("somthing went wrong.."))
        
    },[country,category])
    return(
        <NewsArticle heading={'NewsToday - '+category} isLoading={isLoading} news={news}/>
    )
}