import React from "react";

const userOutput = (props) => {
    return (
        <div onClick={props.clicked}>
            
            {/* <p>will i get changed later ?</p> */}
            <p>{props.userName}</p>
        </div>
    )
  };
  
  export default userOutput;
  