import React from 'react';
import Card from '../Components/Card.js';
import Buttons from '../Components/Buttons.js';
import { useState } from 'react';
import ProjectData from '../Data/Projects.js';

const Projects = () => {
    const [item, setItem] = useState(ProjectData);
    const projectItems = [...new Set(ProjectData.map((Val) => Val.category))];
    const filterItem = (curcat) => {
        const newItem = ProjectData.filter((newVal) => {
          return newVal.category === curcat; 
                // comparing category for displaying data
        });
        setItem(newItem);
      };
    return (
        <div>
            <div className="container-fluid">
                <div className="row pt-5">
                    <h1 className="col-12 mb-10 text-center my-3 fw-bold">projects</h1>
                        <Buttons setItem={setItem} projectItems={projectItems} filterItem={filterItem}/>
                        <Card item={item} className="card"/>
                </div>
            </div>
        </div>
    );
}

export default Projects;