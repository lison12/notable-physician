import React from 'react';
// import $ from 'jquery';

const Physicians = (props) => {

    return (
      <div className="physicians">
        <h3> PHYSICIANS </h3>
        Enter a Doctor's name: 
        <input value='Name' />       
        <ul>
          {props.physicians.map((physician, i) => {
            // console.log(physician)
            return (
              <li id='physician' key={i} onClick={(e)=> props.selectDoc(e, {physician})}>
                {`${physician.last}, ${physician.first}`}
              </li>
            );
          })}
        </ul>
        <button onClick={props.search} > LOGOUT </button>
      </div>
    );
}

export default Physicians;
