export function Card({article}){
    
     if(!article.urlToImage || !article.description)return;
     
     return(
         <article className="mx-auto max-w-sm rounded overflow-hidden shadow-lg  hover:shadow-slate-500 hover:ring-1 hover:ring-slate-200">
            <figure>
             <img className="object-contain w-[384px] h-auto" width='384px' height='256px' src={article.urlToImage} alt={"News Today App - "+article.title}/>
             <figcaption hidden >{"Breaking News - "+article.title}</figcaption>
             </figure>
             <a href={article.url}><div className="px-6 py-4">
                <div className="font-bold text-lg md:text-xl mb-2">{article.title}</div>
                <p className="text-gray-700 text-base">
                {article.description}
                </p>

                <div className="text-sm mt-2 flex flex-col gap-2 font-semibold"><span className="p-1 w-fit bg-slate-300 rounded-md">Source: {article.source.name}</span><time className="p-1 w-fit bg-slate-300 rounded-md">Published at: {article.publishedAt}</time></div>
             </div></a>
         </article>  
     )
 }
 