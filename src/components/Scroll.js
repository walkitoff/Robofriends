import React from 'react';

const Scroll = (props) => {
    return (
        // <div style={props.style} >
        //     {props.children}
        // </div>
        <div {...props} />
    )
};

export default Scroll;

// {props.children} === anything that is wrapped by <Scroll></Scroll>