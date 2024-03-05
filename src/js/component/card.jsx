import React from "react";

//include images into your bundle


const card = () => {
	return (
		<div className="card col-3 m-2" >
        <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe iure sed obcaecati velit enim ad consequuntur error dignissimos illum animi impedit sint eveniet quae, repellat amet ducimus, consectetur modi aspernatur.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
	);
};

export default card