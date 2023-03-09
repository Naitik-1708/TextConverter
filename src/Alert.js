import React from 'react';

function Alert(props) {

    const capitalixe = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height : '50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} `} role="alert">
                <strong>{capitalixe(props.alert.type)}</strong> : {props.alert.message}
            </div>}
        </div>
    );
}

export default Alert;