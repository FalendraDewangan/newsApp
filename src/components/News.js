import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default function News(props) {
  const [page,setPage] = useState(1)
  const [article, setArticle] = useState([])
  const [total, setTotal] = useState([])
  const [loading, setLoading] = useState(false)
  var url =  `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&language=${props.language}&sortBy=${props.sortBy}&apiKey=71ba0ccbba9c40b0abb22032aa7e38ff&pageSize=18&q=${props.q}&page=${page}`

  const updateArticle=async ()=>{
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json(data);
    
    setArticle(parsedData.articles)
    setTotal(parsedData.totalResults)      
    setLoading(false)
}

  // this function is called when the element is provided in array changes, if the array is empty then it is called once at last
  useEffect(()=>{
    updateArticle();
    setPage(1);
    document.title = props.category.toUpperCase()+"-NEWS"
  },[props.category,
  props.language,
  props.pageSize,
  props.q,
  props.sortBy,
  props.country])

  function handlePrevious(){
    setPage(page-1);
    url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&language=${props.language}&sortBy=${props.sortBy}&apiKey=71ba0ccbba9c40b0abb22032aa7e38ff&pageSize=18&q=${props.q}&page=${page}`
    updateArticle()
  }
  function handleNext(){
    setPage(page+1);
    url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&language=${props.language}&sortBy=${props.sortBy}&apiKey=71ba0ccbba9c40b0abb22032aa7e38ff&pageSize=18&q=${props.q}&page=${page}`
    updateArticle()
  }

  return (
    <>
      <div className='container '>
        <div style={{"height":"35px"}}>
          {loading && <Spinner />}
        </div>
        <h1>{(props.category).toUpperCase()}-NEWS</h1>
        <div className="row my-1  ">
          {
            article.map((element) => {
              return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 93):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author+" "+element.publishedAt} />
              </div>
            })
          }
          <div className="d-flex justify-content-between">
          <button type="button" disabled={(page===1)?true:false } className="btn btn-dark" onClick={handlePrevious}>&laquo; Previous</button>
          <button type="button" disabled={(page===Math.ceil(total/18))?true:false} className="btn btn-dark" onClick={handleNext}>Next &raquo;</button>
          </div>
        </div>
      </div>
    </>
  )
}

News.defaultProps={
  category:"general",
  language:"en",
  pageSize:"18",
  q:" ",
  sortBy:"popularity",
  country:"in"
}