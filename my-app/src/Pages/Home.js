import React from 'react';
import Collapsible from './Collapsible';

const Home = () => {
    return (
        <><div class="home">
            <div class="intro">
                <h1>hi, my name is</h1>
                <h2>Lina.</h2>
                <div class ="below-intro">
                    <div class="intro-block">
                        <a href="#collapsible">
                            <div class="arrow">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>

                        
                    </div>
                    <div class="intro-block">
                        <h3>i am an aspiring developer & avid creator.</h3>
                        <h3>let's get to know each other!</h3>
                    </div>
                </div>
            </div>

            <div className="about-me">
                <Collapsible title="education" defaultExpanded="true">
                    i am a current student at the University of Toronto, with a double major in Computer Science and Statistics looking to integrate a focus on artificial intelligence and psychology. i am interested in data, machine learning, neural networks, and deep learning. i am most confident working with Python, but i am also familiar with Java, R, SQL, HTML, CSS, TypeScript (Angular), and JavaScript (ReactJs).
                    <br/><br/>
                </Collapsible>
                <Collapsible title="creation">
                    as much as i love proofs and theory, i grew up with a strong background in visual arts, so i constantly look for ways i can create. whether it’s software development, painting, drawing, or cooking, i love to find different ways to exhibit my creativity and passions.
                    <br/><br/>
                </Collapsible>
                <Collapsible title="as of lately" collapsedHeight="32">
                    i am currently on my co-op term with the Ministry of Community, Children, and Social Social Services (MCCSS) as a Business Analyst, where our focus is to provide more accessible, reliable healthcare and programs to children and youth with special needs through technology.
                    i am on the exec team at the Women and Science and Engineering (WISE) club at UofT, where I have got to share my love of STEM in the GTA (Greater Toronto Area) through workshops, panels, networking events, galas, and more.
                    i am currently in the process of starting a club at UofT, Students in Data Science and Statistics. Through workshops, mentorship, projects, and more, we hope to harbour a supportive and collaborative community for students to learn and grow. Check it out!
                    <br/><br/>
                </Collapsible>
            </div>
        </div></>


    );
};

export default Home;