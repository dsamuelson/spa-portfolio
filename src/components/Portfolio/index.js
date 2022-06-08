import React from "react";

function Portfolio() {
   return (<div className="portfolio-cont">
    <article className="portfolio-link">
        <div className="work-title">
            <h3>ParkScape</h3>
            <p>Project HTML CSS Javascript</p>
        </div>
        <a href="https://emilypape.github.io/parkscape/" target="_blank">
            <img 
            src={require("../../assets/images/croppedrockies.png")}
            alt="a scenic mountain scape with a clear lake and green pines"
            />
        </a>
    </article>
    <article className="portfolio-link">
        <div className="work-title">
            <h3>Budgetek</h3>
            <p>Node MVC Handlebars</p>
        </div>
        <a href="https://quiet-tundra-30236.herokuapp.com/" target="_blank">
            <img 
            src={require("../../assets/images/budgetek.jpg")} 
            alt="an array of different bills from different companies"
            />
        </a>
    </article>
    <article className="portfolio-link">
        <div className="work-title">
            <h3>Horiseon Landing</h3>
            <p>HTML CSS</p>
        </div>
        <a href="https://dsamuelson.github.io/Horiseon-landing-page/" target="_blank">
            <img 
            src={require("../../assets/images/digital-marketing-meeting.jpg")} 
            alt="a group of people looking at plans on a desk, this is the main image on the Horiseon landing page"
            />
        </a>
    </article>
    <article className="portfolio-link">
        <div className="work-title">
            <h3>Photo Port</h3>
            <p>React SPA</p>
        </div>
        <a href="https://dsamuelson.github.io/photo-port/" target="_blank">
            <img 
            src={require("../../assets/images/photo-port-cut.png")} 
            alt="a cut out of the webpage with a title piece and one photo"
            />
        </a>
    </article>
    <article className="portfolio-link">
        <div className="work-title">
            <h3>Run Buddy</h3>
            <p>HTML CSS</p>
        </div>
        <a href="https://dsamuelson.github.io/run-buddy/" target="_blank">
            <img 
            src={require("../../assets/images/run-buddy.jpg")} 
            alt="a female runner bending down to tie her shoes before going on her run"
            />
        </a>
    </article>
</div>)
}

export default Portfolio;