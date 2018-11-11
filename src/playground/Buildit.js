class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.hadleToggleVisibility=this.hadleToggleVisibility.bind(this);
        this.state={
            visibility:false
        };
    }
    hadleToggleVisibility(){
        this.setState((prevState)=>{
            return{visibility:!(prevState.visibility)}
        });
    }
    render(){
        return(
            <div>
           
                <h1>Visibility Toggle</h1>
                <button onClick={this.hadleToggleVisibility}>{(this.state.visibility)?'Hide-text':'Show-Text'}</button>
                {(this.state.visibility)&&<div><p>Here is some text.</p></div>}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'));

                    //Same With Old Style. 
// var text_button="Show-text";
// var para="";
// var Onclick=()=>{
//     if(para==''){
//     text_button="hide-text";
//     para='h=ththi';
// }else{
//     para='';
//     text_button="show-text";
// }
//     renderValue();
// };

// function renderValue(){
// var template=(
// <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={Onclick}>{text_button}</button>
//     <p>{para}</p>
// </div>
// );

// var appRoot=document.getElementById('app');
// ReactDOM.render(template,appRoot);
// };
// renderValue();