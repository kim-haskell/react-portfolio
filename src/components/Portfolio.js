import React from "react";

function Portfolio () {
    return (

        <>
        <div class="container">
        <div class="jumbotron jumbotron-fluid" id="jumbo">
          <div class="container">
            <h1>Projects</h1>
            <div class="card-text">
              <div class="card-body" id="pages">
               <h5 class="card-title">Pages</h5>
               <p><a href="https://www.linkedin.com/in/kimhaskella59a631a22/">LinkedIn Profile</a></p>
              <p><a href="assets/Kim Haskell.Resume .pdf">Resume</a> </p>
             </div>
             </div>
        </div>
      
        <div class="container">
        <div class="row">
          <div class="col-sm-4">
          <img class="card-img-top" src="assets/Weather Dashboard.png" alt="Weather icons and cities"></img>
            <a href="https://kim-haskell.github.io/Weather-Dashboard/">Weather-Dashboard Project</a>
          </div>
          <div class="col-sm-4">
            <img class="card-img-top" src="assets/Work Day Scheduler.png" alt="Image of Calendar day schedule"></img>
              <a href="https://kim-haskell.github.io/Work-Day-Scheduler/">Work Day Schedule Project</a>
            </div>
          <div class="col-sm-4">
          <img class="card-img-top" src="assets/Dang I'm Hungry.png" alt="Text that says Dang I'm hungry"></img>
            <a href="https://magire01.github.io/project1-group7/">Food and Coctail Recipe Page</a>
        </div>
      </div>  
    <br></br>
        <div class="row">
          <div class="col-sm-4" id="second-row">
          <img class="card-img-top" src="assets/NeighBoard.png" alt="Image of houses"></img>
            <a href="https://github.com/kim-haskell/NeighBOARD/">NeighBoard Community App Project</a>
            </div>
            <div class="col-sm-4" id="second-row">
            <img class="card-img-top" src="assets/Note-Taker.png" alt="Notepad with to-do list"></img>
              <a href="https://github.com/kim-haskell/Note-taker-1">Note Taker Project</a>
              </div>
            </div>  
        </div>
      </div>
    </div> 

    </>
    )
}


export default Portfolio;