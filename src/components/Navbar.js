import React from "react";



function Navbar () {
    
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <h4>Kim Haskell</h4>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href={"/"}>About <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href={"/Portfolio"}>Portfolio</a>
                <a className="nav-item nav-link" href="./Contact">Contact</a>
              </div>
             </div> 
          </nav>
          
     );
    
}

export default Navbar;
