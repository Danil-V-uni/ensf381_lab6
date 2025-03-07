import React from 'react';

function Contact(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div>Contact Us</div>
        </div>
    );
}

export default Contact;
