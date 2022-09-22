import React from "react";

const Button = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.go();
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Get Random Dog"/>
            </form>
        </div>
    )
};

export default Button;