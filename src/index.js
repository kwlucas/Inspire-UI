import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './lib/reportWebVitals';

//function component
function HelloWorld(props) {
    return (
    <div>
        <h1>Hello World - {props.name}</h1>
    </div>)
};

//classes can be used to create a component as well.
//Class components utilize states which can be initialized in the class constructor as an object called "state"
//You can also place props in the constructor of class components
//Using subclasses (extending a class) you can create components which use their parent components inside of it

const element = <HelloWorld name="Kyle" />

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

root.render(element);