import React from "react";

const Loader = () => {
	return (
		<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
			<div class='loader'>
				<div class='justify-content-center jimu-primary-loading'></div>
			</div>
		</div>
	);
};

export default Loader;
