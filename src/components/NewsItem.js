import React from 'react'


export default function NewsItem(props) {
  return (
      <div className="card my-3" style={{"width": "22rem"}}>
        <img src={props.imageUrl} className="card-img-top" alt="..." style={{width:"22rem"}}/>
          <div className="card-body">
            <h5 className="card-title"><b>{props.title}...</b></h5>
            <p className="card-text" style={{textAlign:"initial"}}>{props.description}...</p>
            <p className="card-text"><small className="text-muted">{props.author}</small></p>
            <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
          </div>
    </div>
  )
}
