import {Card} from './Card.js';
import RollingSVG from '../rollingSvg.svg';
export function NewsArticle({news,isLoading}){
  return (
    <>
      {
        isLoading?<img className='m-auto absolute left-0 right-0 top-0 bottom-0 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] ' src={RollingSVG} style={{float: 'left'}} alt="loading News"></img>:(
      <div className='grid sm:grid-cols-3 gap-4 p-4'>
        {
          news && news.map((article,i)=>{
            return <Card key={article.title+i} article={article}/>
          })
        }
      </div>
        )
      }
      <p hidden>
      Welcome to "News Today" – Your Ultimate Source for Breaking News and the Latest Updates. Stay informed with "News Today," your go-to destination for daily news, top stories, and international coverage. Our news aggregator app offers real-time news alerts, in-depth news articles, and a comprehensive newsfeed that covers current events from around the world. Get the most relevant news headlines and stay up-to-date on politics, technology advancements, business trends, sports highlights, and entertainment buzz. Whether you're interested in health news, science discoveries, or weather updates, "News Today" has you covered.
      Our mobile news app ensures you have access to trending news wherever you are, providing live news broadcasts and insightful news analysis. With extensive news coverage and news highlights, "News Today" is the perfect choice for staying informed in a fast-paced world. Download our app now and join millions of users who rely on "News Today" for accurate and up-to-the-minute news coverage. Don't miss out on the latest happenings – stay connected with us and experience the future of news delivery. This content aims to engage users while incorporating the provided keywords naturally. Remember to create valuable, informative, and user-friendly content to improve SEO and user experience on your "News Today" web application.
      </p>
    </>

  );
}