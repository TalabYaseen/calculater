import React,{Component} from "react";


export default class Calculater extends Component {
            state = {
                result : "",
            }
            
    render(){

        return (
            <div className="container" style={{width:"30%"}}>
                <h1 className="text-center mt-5" >Calculater</h1>
            <div className="card border border-secondary">
                 <div className="card-body bg-secondary bg-lg text-center bg-opacity-50 border border-dark">
                    {this.state.result}
                 </div>
                 <div className="card-body bg-primary text-center bg-opacity-50">
                    <div className="row justify-content-center">
                        <button className="col-2 m-1 btn btn-success btn-lg" onClick={()=>this.operation_string("+")}>+</button>
                        <button className="col-2 m-1 btn btn-danger btn-lg" onClick={()=>this.operation_string("-")}>-</button>
                        <button className="col-2 m-1 btn btn-warning btn-lg" onClick={()=>this.operation_string("/")}>/</button>
                        <button className="col-2 m-1 btn btn-dark btn-lg" onClick={()=>this.operation_string("*")}>*</button>
                    </div>
                    <div className="row justify-content-center">
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(1)}>1</button>
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(2)}>2</button>
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(3)}>3</button>
                    </div>
                    <div className="row justify-content-center">
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(4)}>4</button>
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(5)}>5</button>
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(6)}>6</button>
                    </div>
                    <div className="row justify-content-center">
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(7)}>7</button>
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(8)}>8</button>
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(9)}>9</button>
                    </div>
                    <div className="row justify-content-center">
                        <button className="col-2 m-1 btn btn-secondary btn-lg" onClick={()=>this.operation_string(0)}>0</button></div>
                        <div className="row justify-content-center">
                        <button className="col-4 m-1 btn btn-light btn-lg"onClick={()=>this.delete()}>Ac</button>
                        <button className="col-4 m-1 btn btn-dark btn-lg"onClick={()=>this.result()}>Result</button>
                    </div>
                 </div>
            </div>
            </div>
        )
    }
    operation_string = (n) => {
        this.state.result = this.state.result+n;
        this.setState({result:this.state.result})
        console.log(this.state.result);
        
    }
    result = () => {
        console.log((this.state.result));
        const str = this.state.result;
        const result = str.split(/[+/*-]/);
        const operation = str.match(/[+/*-]/);
        console.log(operation[0]);
        switch (operation[0]){
            
            case "+" : this.setState({result:Number(result[0])+Number(result[1])});
            break;
            case "-" : this.setState({result:Number(result[0])-Number(result[1])});
            break;
            case "/" : this.setState({result:Number(result[0])/Number(result[1])});
            break;
            default : this.setState({result:Number(result[0])*Number(result[1])});

        }
    }

    delete = () => {
        this.setState({result:0})
    }

}
