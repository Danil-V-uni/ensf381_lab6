import React from 'react';

function Home(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>Welcome to the Home Page</p>
        </div>
    );

}

export default Home;
