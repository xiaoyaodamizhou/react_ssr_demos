import React from "react";

const NotFound = (props) => {
    props.staticContext && (props.staticContext.notFound = true)
    return (
        <div>
            <div>404 not found</div>
        </div>
    );
};

export default NotFound;
