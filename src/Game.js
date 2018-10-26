import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './bootstrap.min.css';
import './Game.css';

var possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
      var combinationSum = 0;
      for (var j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  };

const Stars = (props) => {
    let stars=[];
    for (let i=0; i < props.numberOfStars; i++){
        stars.push(<i key={i} className="fa fa-star"></i>)
    }
    return(
        <div className="col-5">
            {stars}
        </div>
    )
}

const Button = (props) => {
    let button;
    switch(props.answerIsCorrect){
        case true:
        button =
        <button className="btn btn-success" onClick={props.acceptAnswer}>
        <i className="fa fa-check"></i>
        </button>;
            break;
        case false:
        button =
        <button className="btn btn-danger" >
        <i className="fa fa-times"></i>
        </button>;
            break;
        default:
        button =
        <button className="btn btn-dark" 
        onClick={props.checkAnswer}
        disabled={props.selectedNumbers.length ===0 }>
        =
        </button>;
            break;
    }
    return(
        <div className="col-2 text-center">
            {button}
            <br />
            <br />
            <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled = {props.redrawNumber === 0}>
                <i className="fa fa-refresh" ></i>{props.redrawNumber}
            </button>
        </div>
    )
}

const Answer = (props) => {
    return(
        <div className="col-5">
        {props.selectedNumbers.map((number, i)=>
            <span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
        )}

        </div>
    )
}

const Numbers = (props) => {
    const numberClassName = (number) => {
        if(props.usedNumbers.indexOf(number)>=0){
            return 'numbers-used';
        }
        if(props.selectedNumbers.indexOf(number)>=0){
           return 'numbers-selected'; 
        }
    };
    return(
        <div className="card bg-secondary text-center">
            <div>
                {arrayOfNumber.map((number, i ) => 
                    <span key={i} className={numberClassName(number)} 
                    onClick = {()=> {props.selectNumber(number)}}>{number}</span>
                )}
            </div>
        </div>
    )
};

const arrayOfNumber = [1,2,3,4,5,6,7,8,9];

const DoneFrame = (props) =>{
    return(
        <div className="text-center">
        
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary" onClick={props.resetGame}>Play Again</button>
        </div>
    )
}

class Game extends Component {
    static randomNumber= () => 1 + Math.floor(Math.random()*9);
    static initialState = ()=> ({
        selectedNumbers:[],
        numberOfStars: Game.randomNumber(),
        usedNumbers: [ ],
        answerIsCorrect: null,
        redrawNumber: 5,
        doneStatus: null,
    });
    state = Game.initialState();

    resetGame = () => this.setState(Game.initialState());
    
    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber)>=0 || this.state.usedNumbers.indexOf(clickedNumber)>=0){return;}
        this.setState(preState => ({
            selectedNumbers: preState.selectedNumbers.concat(clickedNumber),
            answerIsCorrect: null
        }));
    };
    unselectNumber = (clickedNumber) =>{
        this.setState(preState => ({
            selectedNumbers: preState.selectedNumbers.filter(number => number !== clickedNumber),
            answerIsCorrect: null
        }));
    };
    checkAnswer = ()=>{
        //check is answer = numbers
        this.setState(preState =>({
            answerIsCorrect: preState.numberOfStars === preState.selectedNumbers.reduce((acc,n)=> acc+n, 0)
        }));
    };
    acceptAnswer = ()=>{
        // mark the accepted answer numbers as used
        this.setState(preState => ({
            usedNumbers: preState.usedNumbers.concat(preState.selectedNumbers),
            selectedNumbers:[],
            answerIsCorrect: null,
            numberOfStars: Game.randomNumber(),
        }), this.updateDoneStatus); //call function updateDoneStatus
    };

    redraw = () =>{
        if (this.state.redrawNumber === 0) {return;}
        this.setState(preState =>({
        selectedNumbers:[],
        numberOfStars: Game.randomNumber(),
        answerIsCorrect: null,
        redrawNumber: preState.redrawNumber -1
        }), this.updateDoneStatus);//call function updateDoneStatus
    }

    possibleSolutions = ({numberOfStars, usedNumbers})  =>{
        const possibleNumbers = arrayOfNumber.filter(number =>
            usedNumbers.indexOf(number) === -1
        );

        //possibleNumbers compare with numberofStars
         return possibleCombinationSum(possibleNumbers, numberOfStars);
        
    };
    
    updateDoneStatus = () => {
        this.setState(preState => {
            if(preState.usedNumbers.length === 9){
                return { doneStatus: 'Done. Nice!'};
            }

            if (preState.redrawNumber === 0 && !this.possibleSolutions(preState)){
                return{ doneStatus: 'Game Over! '};
            }
        });
        
    };

        

  render() {
      const {selectedNumbers, numberOfStars, answerIsCorrect, usedNumbers, redrawNumber, doneStatus} = this.state;
    return (
      <div className="container">
        <h1>Play Nine</h1>
        <div className="gamecontent">
            <div className="row">
                <Stars numberOfStars={numberOfStars}/>
                <Button selectedNumbers={selectedNumbers}
                        checkAnswer={this.checkAnswer}
                        answerIsCorrect={answerIsCorrect} 
                        acceptAnswer={this.acceptAnswer} 
                        redraw={this.redraw} 
                        redrawNumber={redrawNumber}/>
                <Answer selectedNumbers={selectedNumbers} 
                        unselectNumber={this.unselectNumber} />
            </div>
        </div>
        
        <br />
        {doneStatus ? 
        <DoneFrame doneStatus={doneStatus}  resetGame={this.resetGame} />:
        <Numbers selectedNumbers={selectedNumbers}
                selectNumber={this.selectNumber} 
                usedNumbers={usedNumbers} />
        }
        < br/>
        
      </div>
    );
  }
}

export default Game;