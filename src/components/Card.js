export function Card({article}){
    
     if(!article.urlToImage || !article.description)return;
     
     return(
         <a href={article.url} className="mx-auto max-w-sm rounded overflow-hidden shadow-lg  hover:shadow-slate-500 hover:ring-1 hover:ring-slate-200">
             <img className="w-100 h-100" src={article.urlToImage} alt={article.title}/>
             <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{article.title}</div>
                <p className="text-gray-700 text-base">
                {article.description}
                </p>
                <div className="text-sm mt-2 flex flex-col gap-2 font-semibold"><span className="p-1 w-fit bg-slate-300 rounded-md">Source: {article.source.name}</span><span className="p-1 w-fit bg-slate-300 rounded-md">Published at: {article.publishedAt}</span></div>
             </div>
         </a>  
     )
 }
 