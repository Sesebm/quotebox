import React from 'react'
import ButtomNext from './ButtomNext'

const Quotebox = ({data, quote, setQuote}) => {



  return (
    <div>

<section  style={{width: `100vw`, height: `100vh`}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card" style={{borderRadius: `15px`}}>
          <div className="card-body p-5">

            <div className="text-center mb-4 pb-2">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                alt="Bulb" width="100"/>
            </div>

            <figure className="text-center mb-0">
              <blockquote className="blockquote" style={{height: `100px`}}>
                <p className="pb-3">
                  <i className="fas fa-quote-left fa-xs text-primary"></i>
                  <span className="lead font-italic" >{data[quote]?.quote}</span>
                  <i className="fas fa-quote-right fa-xs text-primary"></i>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mb-0">
                {data[quote]?.author}
              </figcaption>
            </figure>
            <br />
            <ButtomNext setQuote={setQuote}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Quotebox