import React from "react";

const Form = (props) => {
	return (
		<div className="container h-100 ">
			<h1 className="text-center title">Meteorology</h1>
			<div>{props.error ? error() : null}</div>
			<form onSubmit={props.loadweather}>
				<div className="row">
					<div className="col-md-3 offset-md-2">
						<input
							type="text"
							className="form-control"
							name="city"
							autoComplete="off"
							placeholder="Ciudad"
						/>
					</div>
					<div className="col-md-3">
						<input
							type="text"
							className="form-control"
							name="country"
							autoComplete="off"
							placeholder="País"
						/>
					</div>
					<div className="col-md-3 col-sm-12 mt-md-0 mt-2">
						<button className="btn btn-primary w-sm-100">
							Obtener el clima
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

function error() {
	return (
		<div className="alert alert-danger mx-5" role="alert">
			Por favor ingrese ciudad y país
		</div>
	);
}

export default Form;
