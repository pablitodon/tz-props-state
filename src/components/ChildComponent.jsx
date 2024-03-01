 import React from "react";

 const ChildComponent = ({name,count}) => {
    
    return (
        <div className="child">Hello, {name}.Текущий счётчик: {count}</div>
    )   
 }

 export default ChildComponent;