
import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selected, setSelected] = useState("");

	const changeColor = color => {
		if (color == selected) {
			setSelected("");
		} else {
			setSelected(color);
		}
	};
	return ( <>
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
		<>
			<div className="trafficTop"></div>
			<div className="trafficBody">
				<div
					className={selected !== "red" ? "red" : "red selected"}
					onClick={() => changeColor("red")}></div>
				<div
					className={
						selected !== "yellow" ? "yellow" : "yellow selected"
					}
					onClick={() => changeColor("yellow")}></div>
				<div
					className={
						selected !== "green" ? "green" : "green selected"
					}
					onClick={() => changeColor("green")}></div>
			    </div>
		    </>
	    );
    </>
}