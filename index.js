import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';







class TicTacToe extends React.Component{
  constructor(){
    super();
    this.state = {
        currMove: true,
        value: ["-","-","-",
                "-","-","-",
                "-","-","-"]
    };
  }


  markSquare(key){

    if(this.state.value[key] === "-"){


      let tempArray = this.state.value;

  console.log("TEST0")
      if(this.state.currMove === true){
  console.log("TEST1")
        for (let i = 0; i < tempArray.length; i++){
  console.log("TEST2")
          if (i === key){
            console.log("TEST3")
            tempArray[key] = "X"
            console.log(tempArray)
          }
        }

        this.setState({
          currMove : !this.state.currMove,
          value : tempArray
        })
      }
      // }else if(this.state.currMove == false){
      //   this.state.value = "O"
      // }

    }
  }

  render(){
    return(
      <div>
        <h1 id="result"></h1>
        <div id="table">
          <div className='row'>
            <button  onClick={() => this.markSquare(0)} id="box-A1" className="box">{this.state.value[0]}</button>
            <button  onClick={() => this.markSquare(1)} id="box-A2" className="box">{this.state.value[1]}</button>
            <button  onClick={() => this.markSquare(2)} id="box-A3" className="box">{this.state.value[2]}</button>
          </div>
          <div className='row'>
            <button  onClick={() => this.markSquare(3)} id="box-B1" className="box">{this.state.value[3]}</button>
            <button  onClick={() => this.markSquare(4)} id="box-B2" className="box">{this.state.value[4]}</button>
            <button  onClick={() => this.markSquare(5)} id="box-B3" className="box">{this.state.value[5]}</button>
          </div>
          <div className='row'>
            <button  onClick={() => this.markSquare(6)} id="box-C1" className="box">{this.state.value[6]}</button>
            <button  onClick={() => this.markSquare(7)} id="box-C2" className="box">{this.state.value[7]}</button>
            <button  onClick={() => this.markSquare(8)} id="box-C3" className="box">{this.state.value[8]}</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TicTacToe/>,
  document.getElementById('root')
);
