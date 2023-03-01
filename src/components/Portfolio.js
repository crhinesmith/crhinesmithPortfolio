import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const handleClick = (item) => {
  window.open(
    `${item}`, "_blank", "noopener, noreferrer"
  )
}
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a
                        href={item.projecturl} 
                        onClick={() => handleClick(item.projecturl)}
                        
                         >
                          <img src={`${item.imgurl}`} className="item-img" alt={`${item.description}`}/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p> 
                              <p>{item.tools}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a href={item.repositoryurl} >
                          <h1>Link to Repository</h1>

                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}