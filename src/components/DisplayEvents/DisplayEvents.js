import React from 'react';


const DisplayEvents = (props) => {
    const {img,title}=props.event;
    return (
        <div className="row">
         <div className="col">
             <img src={img} alt="" />
         </div>
         <div className="col">
             <h4 className="">{title}</h4>
         </div>
        </div>
    );
};

export default DisplayEvents;