import React from 'react';
import Collapsible from '../Components/Collapsible';
import TypingComponent from '../Components/TypingAnimation';

const Home = () => {
    return (
        <div class="home">
            <div class="intro">
                <h1>hi, my name is</h1>
                <h2>Lina.</h2>
                <div class ="below-intro">
                    <div class="intro-block">
                        <a href="#about-me">
                            <div class="arrow">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>

                    </div>
                    <div class="intro-block">
                        <h3><TypingComponent></TypingComponent></h3>
                        {/* <h3>i am an aspiring developer & avid creator.</h3> */}
                        <h4>let's get to know each other!</h4>
                    </div>
                </div>
            </div>

            <div className="about-me" id="about-me">
                <Collapsible title="education" defaultExpanded="true" >
                    i am a current student at the <b>University of Toronto</b>, with a double major in <b>Computer Science and Statistics</b> looking to integrate a focus on <b>artificial intelligence and computer systems</b>. i am interested in data, machine learning, neural networks, and deep learning. i am most confident working with Python, but i am also familiar with Java, R, SQL, HTML, CSS, TypeScript (Angular), and JavaScript (ReactJs). Learn more about my experience through my <a>projects</a> or my <a>resume</a>.
                    <br/><br/>
                </Collapsible>
                <Collapsible title="creation">
                    as much as i love proofs and theory, i grew up with a strong background in visual arts, so i constantly look for ways i can create. whether it’s <b>software development, painting, drawing, or cooking</b>, i love to find different ways to exhibit my creativity and passions. in my free time, i love to share my stories through cooking. <a>check it out</a>!
                    <br/><br/>
                </Collapsible>
                <Collapsible title="as of lately" collapsedHeight="32">
                    i just finished my 8-month co-op term with the <b>Ministry of Community, Children, and Social Social Services (MCCSS)</b> as a Business Analyst, where our focus is to provide <b>more accessible, reliable healthcare and programs</b> to children and youth with special needs through technology and data.
                    <br></br><br></br>
                    within the UofT community, i co-founded <b>Students in Data Science and Statistics (SDSS)</b>. Through workshops, mentorship, projects, and more, we harbour a supportive and collaborative community for students to learn and grow in data science and statistics.
                    leading over <b>20+ execs</b>, our team is actively working to provide support and resources to <b>200+ general members</b>. Check it out here:
                    <br></br>
                    <div class="sdss-links">
                        <a href="https://www.instagram.com/SDSSUofT">Instagram</a>
                        <a href="https://www.linkedin.com/company/sdssuoft">LinkedIn</a>
                        <a href="https://www.sdssuoft.com">Website</a>
                    </div>

                    <br></br>
                    i am also working with UofT's <b>Women in Science and Engineering (WISE)</b> on the Conference Team, where we are planning WISE's annual 2-day national conference for <b>400+ attendees</b>, packed with keynote speakers, workshops, panels, competitions, and networking opportunities, set to happen in January 2024 at Westin Harbour Castle. we seek to support women and non-binary students in STEM throughout Canada.
                    <br></br>
                    <div class="sdss-links">
                        <a href="https://conference.wiseuoft.org/">WISENC Website</a>
                    </div>
                    <br></br>
                    want to learn more about my initatives? check out my <a>archives</a>, my <a>resume</a>, or <a>let's connect</a>!
                </Collapsible>
            </div>
        </div>
    );
};

export default Home;