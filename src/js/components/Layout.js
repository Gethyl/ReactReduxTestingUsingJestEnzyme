import React from "react";
import Home from "./Home"

export default class Layout extends React.Component{
	render(){	

		return(
			<div>
				 <h1>Basic Calculator</h1>
				 <Home/>
			</div>
		);
	}
}