import React from "react";


function Contact () {

    return (
       

        <form>
                <div className="container" id="form-border">
                <div className="form-group">
                  <h3>Let's Chat!</h3>
                  <label for="exampleInputEmail1">Name</label>
                  <input type="Name" className="form-control" id="exampleInputName" aria-describedby="emailHelp"></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail">Email</label>
                  <input type="Email" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="form-group">
                  <label for="exampleinputmessage">Message</label>
                  <textarea type="Message" className="form-control" id="inputmessage"></textarea>

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div> 
              
              </form>
        
        
    )
}


export default Contact;