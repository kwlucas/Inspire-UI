"use strict";
const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

const createEl = React.createElement;

const helloWorldEl = createEl('div', null, createEl('h1', null, 'Hello World!'));


root.render(helloWorldEl);