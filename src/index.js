import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


    const buttonText = { text: 'Click me!'};
    const labelText='Enter name:'

const App = () => {

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style= {{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>

        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));


/*
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/