
class IndecisionApp extends React.Component{
   constructor(props){
    super(props);
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.handleDeleteOption=this.handleDeleteOption.bind(this);
    this.state={
        options:[]
    };
   }

   componentDidMount(){
       try{
       const json=localStorage.getItem('options');
       const options=JSON.parse(json);

       if(options){
           this.setState(()=>({options}));
       }
   }catch(e){
          //Keep it empty.
   }
}

   componentDidUpdate(prevProps,prevState){
       if(prevState.options.length !==this.state.options.length){
           const json=JSON.stringify(this.state.options);
           localStorage.setItem('options',json);
       }
   }

   handleDeleteOptions(){
        this.setState(()=>({options:[]}));
    }

    handleDeleteOption(optiontoremove){
        this.setState((prevState)=>{
            return{options:prevState.options.filter((option)=>
                 option !== optiontoremove
            )}
        });
    }

    handlePick(){
        const option=Math.floor(Math.random()*this.state.options.length);
        console.log((this.state.options.length>0)&&this.state.options[option]);
    }

    handleAddOption(option){
        if(!option.trim()){
             return 'Enter valid option';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This is a matching option.';
        }
       this.setState((prevState)=>(
           {options:prevState.options.concat(option)}
           ));
    }
    
    render(){
        const title='Indecision App';
        const subtitle="Put your life in the hands of computer.";
        
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
            <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

// IndecisionApp.defaultProps={
//     options:[]
// };

const Header=(props)=>{
    return (
                   <div>
                        <h1>{props.title}</h1>
                        <h2>{props.subtitle}</h2>
                   </div> 
                );
};

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

const Action=(props)=>{
    return(
        <div>
       
            <button onClick={props.handlePick}>What should i do?</button>
        </div>
    );
};

// class Action extends React.Component{
 
//     render(){
//         return(
//             <div>
           
//                 <button onClick={this.props.handlePick}>What should i do?</button>
//             </div>
//         );
//     }
// }

const Options=(props)=>{
    return(
    <div>
          
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length===0&&<p>'Add an option'</p>}    
    {props.options.map((option)=>(<Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}

            />))}
        
    </div>
    );
};

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

const Option=(props)=>{
    return(
        <div>
        {props.optionText}
        <button onClick={(e)=>{props.handleDeleteOption(props.optionText)}}>Remove</button>
        </div>
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//             {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        };
    }
   handleAddOption(e){
       e.preventDefault();
        
       const option=e.target.elements.option.value;
      
       if(option){
            const error=this.props.handleAddOption(option);
           //e.target.elements.option.value='';
           this.setState(()=>({error:error}));
            if(!error){
                e.target.elements.option.value='';
            }    
          
       }
       
   }
    render(){
        return (
            <div>
                {(this.state.error)&&<p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button >Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

                       
                      //bind function
// const obj={
//     name:"nike",
//     getName(){
//         return this.name;
//     }
// };

// const getname=obj.getName.bind(obj);
// console.log(getname());