//install ->export ->use(for using 3rd-party modules.)

//import validator from 'validator';
// console.log(validator.isEmail('gmail@a.com'));
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './component/IndecisionApp.js';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

// import { canDrink } from './utils';




 // IndecisionApp.defaultProps={
 //     options:[]
 // };
 

 
 // class Header extends React.Component{
 //     render(){
 //         return (
 //            <div>
 //                 <h1>{this.props.title}</h1>
 //                 <h2>{this.props.subtitle}</h2>
 //            </div> 
 //         );
 //     }
 // }
 

 
 // class Action extends React.Component{
  
 //     render(){
 //         return(
 //             <div>
            
 //                 <button onClick={this.props.handlePick}>What should i do?</button>
 //             </div>
 //         );
 //     }
 // }
 

 
 // class Options extends React.Component{
   
 //     render(){
 //         return (
 //             <div>
           
 //             <button onClick={this.props.handleDeleteOption}>Remove All</button>
 //                 {this.props.options.map((option)=><Option key={option} optionText={option}/>)}
                 
 //             </div>
 //         );
 //     }
 // }
 

 // class Option extends React.Component{
 //     render(){
 //         return(
 //             <div>
 //             {this.props.optionText}
 //             </div>
 //         );
 //     }
 // }
 

 
 
 
                        
                       //bind function
 // const obj={
 //     name:"nike",
 //     getName(){
 //         return this.name;
 //     }
 // };
 
 // const getname=obj.getName.bind(obj);
 // console.log(getname());

                            //OLD FILES
// // // import './utils.js'
// // import subtract,{add,square} from './utils.js'; 

// // console.log('app.js is running.');
// // console.log(square(4));
// // console.log(add(100,129));
// // console.log(subtract(129,100));

// import isSenior,{canDrink,isAdult} from './utils.js'; 

// const adult=isAdult(18);
// if(adult)
// console.log("He is adult.");
// else
// console.log("He is not adult");

// const drink=canDrink(18);
// if(drink)
// console.log("He can drink");
// else 
// console.log("He can not drink");

// console.log(isSenior(65)+',he is a "Senior Citizen".');