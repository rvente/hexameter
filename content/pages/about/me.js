import React, { Component } from "react";

/*
 * @author Blake Vente
 * 
 */


export default class App extends Component {
  render() {
    const sideLen = "250px";
    const dropShadow={
      boxShadow: "0px 0px 10px black",
      width:sideLen,
      height:sideLen,
    //   margin: "auto" // contorls center image
    }
    const small = {width:sideLen, height:"auto"};
    return (
        <div style={dropShadow}>
        <img style={small}
            src="https://avatars3.githubusercontent.com/u/21066644?s=460&v=4"
            alt="it me"/>
        </div>
    )
  }
}
