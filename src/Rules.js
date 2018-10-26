import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './bootstrap.min.css';
import './Game.css';

class Rules extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="rulesheader">
                        <h3>Rules</h3> 
                    </div>
                    <div className="rulescontent"> 
                        Select one or more numbers that would sum up to the value of the stars.
                        Click the equal sign to see if it is right.
                        If right, the button becomes green and click to countinue.
                        If wrong, the button becomes red and you should pick other right numbers or click refresh if there is no possible correct combination.
                        The objective is to correctly use all the numbers.
                        When all the 9 numbers are used, you win.
                        When there is no refresh time and no possible combination out of the remaining numbers, game over.
                    </div>
                 </div>
            </React.Fragment>
        );
    }

}

export default Rules;