import React from 'react';

function Home(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div>Welcome to the Home Page</div>
        </div>
    );

}

export default Home;
