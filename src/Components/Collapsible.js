import React from 'react';
import {useCollapse} from 'react-collapsed';


function Collapsible(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return (
        <div className="collapsible" id="collapsible">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="header" {...getToggleProps()}>
                <div class="title-container">
                    <div className={"title" + (isExpanded?' black':' gray')}>{props.title}</div>
                    <div className="icon">
                        <div class={(isExpanded?' black':' gray')}>
                            <i className={'fas fa-angle-' + (isExpanded ? 'up' : 'down')}></i>
                        </div>
                    </div>
                </div>
                
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
        );
    
}

export default Collapsible;