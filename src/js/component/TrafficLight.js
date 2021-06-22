import React, { useState } from "react";

//create your first component
export function TrafficLight() {
	const [red, setRed] = useState(false);
	const [yellow, setYellow] = useState(false);
	const [green, setGreen] = useState(false);

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="d-flex flex-column align-items-center">
					<div className="traffic-light-pole bg-dark"></div>
					<div className="traffic-light d-flex flex-column align-items-center p-5 bg-dark">
						<button
							className="btn align-self-center"
							onClick={() => {
								setRed(!red);
								setYellow(false);
								setGreen(false);
							}}>
							<div
								className={`red rounded-circle ${
									red ? "active" : ""
								}`}></div>
						</button>
						<button
							className="btn"
							onClick={() => {
								setYellow(!yellow);
								setGreen(false);
								setRed(false);
							}}>
							<div
								className={`yellow rounded-circle ${
									yellow ? "active" : ""
								}`}></div>
						</button>
						<button
							className="btn"
							onClick={() => {
								setGreen(!green);
								setRed(false);
								setYellow(false);
							}}>
							<div
								className={`green rounded-circle ${
									green ? "active" : ""
								}`}></div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
