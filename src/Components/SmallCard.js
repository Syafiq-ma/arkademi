import React from "react";

const SmallCard = (props) => {
    return(
        <div className="rounded-xl flex flex-col items-center justify-center" style={{width:'161px', height:'142px', boxShadow: '0px 3.5px 4px rgba(0, 0, 0, 0.131556)'}}>
            <img src={props.data.image} width={60}/>
            <div className="text-gray-50 text-xs font-semibold text-center mt-2">{props.data.title}</div>
        </div>
    )
}

export default SmallCard