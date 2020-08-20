import React from "react";

const Category = (props) => {
    return (
        <div>
            <li className="list-group-item" onClick={() => console.log(`${props.title} CLICKED!`)}>
                {props.title}
            </li>
        </div>
    );
};

export default Category;
