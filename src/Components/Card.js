import React from "react";
 
const Card = ({ item }) => {            
           // destructuring props
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
            <div 
                className="col-md-4 col-sm-6 card my-3 mx-3 py-3 border-3 border border-dark rounded-3 card-container d-flex align-items-stretch"
                key={Val.id}
              >
                <div className="card-body d-flex flex-column">
                  <div className="card-title fw-bold fs-4">
                    {Val.title}
                  </div>
                  <div className="card-subtitle mb-2 text-muted">
                    {Val.subtitle}
                    </div>
                  <div className="card-text">{Val.desc}</div>
                  <div className="github-container mt-auto text-center">
                    <a href={Val.link} target="_blank" rel="noreferrer" className="github-link">
                    <img src="/Images/github-mark.png" alt="github" className="github"/>
                    </a>
                  </div>
                  
                </div>
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default Card;