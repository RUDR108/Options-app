import React from 'react';
import AddOptions from './AddOption.js';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    }

    // constructor(props){
    //  super(props);
    //  this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    //  this.handlePick=this.handlePick.bind(this);
    //  this.handleAddOption=this.handleAddOption.bind(this);
    //  this.handleDeleteOption=this.handleDeleteOption.bind(this);
    // //  this.state={
    // //      options:[]
    // //  };
    // }
 
    handleDeleteOptions=()=>{
        this.setState(()=>({options:[]}));
    };

    handlePick=()=>{
        const randomNum=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[randomNum];
        this.setState(()=>
         ({selectedOption:option
            })
        );
        // console.log('At last Working');
    };

    handleAddOption=(option)=>{
        if(!option.trim()){
             return 'Enter valid option';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This is a matching option.';
        }
       this.setState((prevState)=>(
           {options:prevState.options.concat(option)}
           ));
    };

    handleDeleteOption=(optiontoremove)=>{
        this.setState((prevState)=>{
            return{options:prevState.options.filter((option)=>
                 option !== optiontoremove
            )}
        });
    };

    handleClearSelectedOption=()=>{
        this.setState(()=>({selectedOption:undefined}));
    };

    
    componentDidMount=()=>{
        try{
        const json=localStorage.getItem('options');
        const options=JSON.parse(json);
 
        if(options){
            this.setState(()=>({options}));
        }
    }catch(e){
           //Keep it empty.
    }
 };
 
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevState.options.length !==this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    };
 
    
 
    
     
 
    
     render(){
         const title='Indecision App';
         const subtitle="Put your life in the hands of computer.";
         
         return(
             <div>
             <Header title={title} subtitle={subtitle}/>
             <div className="container">
             <Action handlePick={this.handlePick}/>
             <div className="widget">
             <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
             <AddOptions handleAddOption={this.handleAddOption}/></div>
            
             </div>
             <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
             </div>
         );
     }
 }
 
 