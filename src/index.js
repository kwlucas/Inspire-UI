import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './lib/reportWebVitals';

function HelloWorld(props) {
    return (
    <div>
        <h1>Hello World - {props.name}</h1>
    </div>)
};


const element = <HelloWorld name="Kyle" />

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

root.render(element);