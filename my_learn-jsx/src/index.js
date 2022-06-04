import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Counter from './Component-counter/counter';
import Button from "./Component-file/button"; 
import Data from './Component-assignment/Data';



const root = ReactDOM.createRoot(document.getElementById('root'));
//createElement can converts JSX in html
// const element=
// React.createElement("div", {}, 
// [React.createElement("h1",{},"changing in color"), React.createElement("button",{class:"button1 "},"hello world")]
// );

root.render(
  <React.StrictMode>
      {/* <Button></Button>
     {element}  */}
     {/* <Counter></Counter> */}
     <Data></Data>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
