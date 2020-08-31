import React from "react";

function Home () {

    return(
     <div className="card mb-3">
     <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1598887037312-54c5d66e9424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" className="card-img" alt="..."></img>
     </div>
     <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">About Me </h5>
        <p className="card-text">My name is Kim Haskell and I am a full Stack Web Developer with a background in visual merchandising and management looking to bring in my eye for design to a front-end or full stack web development position. I recently completed a full stack web development program through the University of Denver and learned many technologies such as React, ES6, MySQL, CSS and HTML. I have worked on team projects to develop responsive apps, such as a recipe and cocktail app that used APIs to pull recipes based on inputted ingredients. I hope to utilize my skills and continue to grow as I work to create exciting user web experiences.
        </p>
      </div>
    </div>
   </div>
  </div>
 
 )
}


export default Home;