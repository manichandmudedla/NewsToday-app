export function Card({article}){
    
     if(!article.urlToImage || !article.description || !article.content)return;
     
     return(
         <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-slate-500 hover:ring-1 hover:ring-slate-200">
             <img className="w-100 h-100" src={article.urlToImage} alt={article.title}/>
             <div className="px-6 py-4">
             <div className="font-bold text-xl mb-2">{article.title}</div>
             <p className="text-gray-700 text-base">
             {article.description}
             </p>
             </div>
         </div>  
     )
 }
 