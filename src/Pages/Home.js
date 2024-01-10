import React from 'react';
import Collapsible from '../Components/Collapsible';
import TypingComponent from '../Components/TypingAnimation';
import MyTagCloud from '../Components/MyTagCloud';
import BouncingWords from '../Components/BouncingWords';
import ConfettiExplosion from 'react-confetti-explosion';

const Home = () => {
    const [isLargeExploding, setIsLargeExploding] = React.useState(false);
    const largeProps: ConfettiProps = {
        force: 0.8,
        duration: 3000,
        particleCount: 300,
        width: 1600,
        colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
      };
    return (
        <div class="home" id="home">
            <div class="intro">
                <h1>hello there, i'm lina.</h1>
                <div class ="below-intro">
                    <h2><TypingComponent></TypingComponent></h2>
                </div>
                <div class="button-container">
                    <a href="#about-me">
                        <button class="arrow-button" onClick={()=>setIsLargeExploding(!isLargeExploding)} >
                            {isLargeExploding && <ConfettiExplosion {...largeProps} />}
                            let's get this party started.
                            <span class="arrow"></span>
                        </button>
                    </a>
                </div>
            </div>

            <div className="about-me" id="about-me">
                <div className="title">
                    <h1>about me</h1>
                </div>
                <Collapsible title="education" defaultExpanded="true" >
                    i am a current student at the <b>University of Toronto</b>, with a double major in <b>Computer Science and Statistics</b> looking to integrate a focus on <b>artificial intelligence and computer systems</b>. i am interested in data, machine learning, neural networks, and deep learning. i am most confident working with Python, but i am also familiar with Java, R, SQL, HTML, CSS, TypeScript (Angular), and JavaScript (ReactJs). Learn more about my experience through my <a>projects</a> or my <a>resume</a>.
                    <br/><br/>
                </Collapsible>
                <Collapsible title="creation">
                    as much as i love proofs and theory, i grew up with a strong background in visual arts, so i constantly look for ways i can create. whether it’s <b>software development, painting, drawing, or cooking</b>, i love to find different ways to exhibit my creativity and passions. in my free time, i love to share my stories through cooking. <a>check it out</a>!
                    <br/><br/>
                    i find my creativity through reading and collaborating with others. i love listening to other people's stories and learning more about our world and the people that live in it. building a career in technology, i hope to create a more inclusive and accessible world for everyone.
                    <br/><br/>
                </Collapsible>
                <Collapsible title="current status" collapsedHeight="32">
                    i just finished my 8-month co-op term with the <b>Ministry of Community, Children, and Social Social Services (MCCSS)</b> as a Business Analyst, where our focus is to provide <b>more accessible, reliable healthcare and programs</b> to children and youth with special needs through technology and data.
                    <br></br><br></br>
                    within the UofT community, i co-founded <b>Students in Data Science and Statistics (SDSS)</b>. Check it out here:
                    <br></br>
                    <div class="sdss-links">
                        <a href="https://www.instagram.com/SDSSUofT">Instagram</a>
                        <a href="https://www.linkedin.com/company/sdssuoft">LinkedIn</a>
                        <a href="https://www.sdssuoft.com">Website</a>
                    </div>

                    <br></br>
                    i am also working with UofT's <b>Women in Science and Engineering (WISE)</b> on the Conference Team, planning WISE's annual <a href="https://conference.wiseuoft.org/">2-day conference</a>.
                    <br></br>
                    <br></br>
                    other than that, i am currently reading human acts by han kang and rewatching stranger things. 
                    <br></br>
                    <br></br>
                    want to learn more about my initatives? <a href="https://www.linkedin.com/jin-lina">let's connect</a>!
                </Collapsible>
            </div>
            <div className='skills' id='skills'>
                <h1>skills</h1>
                <div className='bouncing-words' id='canvas'>
                    <BouncingWords></BouncingWords>
                </div>
                <div className='tag-cloud'>
                    <MyTagCloud></MyTagCloud>
                </div>
            </div>
        </div>
    );
};

export default Home;