import React from "react";

const Weather = (props) => {
	return (
		<div className="container text-light text-center">
			<div className="Card ">
				<h1 className="text-white py-3 ">{props.city}</h1>
				<h5 className="py-4 ">
					<i className={`wi ${props.weatherIcon} display-1`} />
				</h5>
				{/* Descripcion del clima */}
				<p className="py-3 description">
					{props.description.charAt(0).toUpperCase() +
						props.description.slice(1)}
				</p>
				{props.temp_celsius ? (
					<h1 className="py-2 ">{props.temp_celsius}&deg;c</h1>
				) : null}
				{/* Mostrar temperatura max y min */}
				{minmaxTemp(props.temp_min, props.temp_max)}
			</div>
		</div>
	);
};

export default Weather;

function minmaxTemp(min, max) {
	if (min && max) {
		return (
			<h3>
				<span className="px-4 ">{min}&deg;C</span>
				<span className="px-4 ">{max}&deg;C</span>
			</h3>
		);
	}
}
