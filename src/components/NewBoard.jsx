import React, { useState,useEffect } from 'react'
import NewItem from './NewItem';

function NewBoard({category}) {


    const[articles,setArticle]=useState([])

    useEffect(() => {
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            //converting json format and fetching
            // call setArticle function and the data on article so call article
            fetch(url).then(response=> response.json()).then(data=> setArticle(data.articles));
    }, [category])
    

  return (
    <>
   
        <h2  className='text-center border-top border-primary'>Latest <span className='badge bg-info'>News Board</span></h2>
        {articles.map((news,index)=>{
            return <NewItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}

        
    </>
  )
}

export default NewBoard