import React from "react";
import ProjectData from "../Data/Projects";
 
const Buttons = ({ setItem, projectItems, filterItem }) => {
    return (
        <>
          <div className="d-flex justify-content-left button ">
          <button
              className="btn-light text-black border-dark border-2 p-1 px-3 mx-2 fw-bold btn"
              onClick={() => setItem(ProjectData)}
            >
              All
            </button> 
            {projectItems.map((Val, id) => {
              return (
                <button
                  className="btn-dark text-white p-1 px-2 mx-2 btn fw-bold"
                  onClick={() => filterItem(Val)}
                  key={id}
                >
                  {Val}
                </button>
              );
            })}
           </div>
        </>
      );    
};
 
export default Buttons;