import {Card} from './Card.js';
import RollingSVG from '../rollingSvg.svg';
export function NewsArticle({news,isLoading}){
  return (
    <>
      {
        isLoading?<img className='m-auto absolute left-0 right-0 top-0 bottom-0 w-[50px] h-[50px] sm:w-[95px] sm:h-[95px] ' src={RollingSVG} style={{float: 'left'}} alt="loading News"></img>:(
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 overflow-hidden'>
        {
          news && news.map((article,i)=>{
            return <Card key={article.title+i} article={article}/>
          })
        }
      </div>
        )
      }
    </>

  );
}