class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count:0,
            name:'DON'
        };
    }
    handleAddOne(){
        // this.state.count+=1;
        //this.setState to update state
        this.setState((prevState)=>{//prevState is current this.state
            return{
                count:prevState.count+1
            }
        });
    }
    handleMinusOne(){
        this.setState((prevState)=>{//prevState is current this.state
            return{
                count:prevState.count-1
            }
        });
    }
    handleReset(){
        this.setState((prevState)=>{//prevState is current this.state
            return{
                count:0
            }
        });
    }

    componentDidMount(){
        try{
        const scount=localStorage.getItem('count');
       const count=parseInt(scount,10);
 
        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }catch(e){
           //Keep it empty.
    }
 }
 
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !==this.state.count){
           
            localStorage.setItem('count',this.state.count);
        }
    }
  
    render(){
        return(
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps={
//     count:0
// };

ReactDOM.render(<Counter />,document.getElementById('app'));

              //Old Starting Work

// console.log('App  running.');

// //create app object title/subtitle
// const app={
//     title:'Indecision app.',
//     subtitle:'To create something new.',
//     options:[]
// };
// //use title/subtitle in the template
// //render template

// //JSX - JavaScript XML 

// const template=(
//     <div>
//     <h1>{app.title}</h1>
//     {(app.subtitle) && <h2>{app.subtitle}</h2>}
//     <p>{app.options.length>0?"Here are your options.":"No options present."}</p>
    
//     <ol>
//       <li>Item One</li>
//       <li>Item two</li>
//       <li>Item three</li>
//     </ol>
//     </div>);

// //make a new variable as sjx expression
// const user={
//     name:'Andrew',
//     age:3,
//     location:'philadeiphia'
// };

// const getLocation=function(location){
//     if(location){
//         return <p>Location:{location}</p>;
//     }
// }
// // var username='Andrew';

// let count=0;

// const addone=()=>{
//     count++;
//     renderCounrter();
// };
// const minusone=()=>{
//     count--;
//     renderCounrter();
// };
// const reset=()=>{
//     count=0;
//     renderCounrter();
// };
// let userage=26;
// let userlocation='phila';

// const onFormSubmit=(e)=>{
//     e.preventDefault();
//     const option=e.target.option.value;
//     if(option){
//        app.options.push(option);
//        renderCounrter();
//        e.target.option.value='';
//     }
// };

// const onRemoveAll=(e)=>{
//     e.preventDefault();
//     app.options.length=0;
//     renderCounrter();
// };

// const appRoot=document.getElementById('app');

// var numbers=[55,101,1000];

// const onMakedecision=function(){
//     const randomNum=Math.floor(Math.random()*app.options.length);
//     const option=app.options[randomNum];
//     alert(option);
// };

// const renderCounrter=function(){
//     let templatetwo=(
//         <div>
//             <h1>{ user.name || 'Anonymous'}</h1>
//             {(user.age && user.age>18) &&    <p>Age: {user.age}</p>}
//             <p>Location: {userlocation}</p>
//             <p>{app.options.length}</p>
//             <p>count:{count}</p>
//             <button onClick={addone} className="button button-large">+1</button>
//             <button onClick={minusone}>-1</button>
//             <button onClick={reset}>reset</button>
//             <button onClick={onRemoveAll}>Remove all</button>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name='option'/>
//                 <button>Add Option</button>
//             </form>

//             <button disabled={app.options.length===0} onClick={onMakedecision}>What should i do?</button>
           
//             {numbers.map((number)=>{
//                 return <p key={number}>number:{number}</p>;
//             })}

//             <ol>
//                 {app.options.map((option)=>{
//                   return  <li key={option}>option:{option}</li>
//                 })}
//             </ol>
//         </div>
//     );

// //ReactDOM.render(template,appRoot);
// ReactDOM.render(templatetwo,appRoot);
// };
// renderCounrter();