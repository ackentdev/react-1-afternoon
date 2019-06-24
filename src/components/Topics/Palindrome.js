import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: '',
            palindrome : ''
        };
    }

    handleChange(val) {
        this.setState({ userInput: val });
      };

      isPalindrome(userInput) {
          let forwards = userInput;
          let backwards = userInput;
          backwards = backwards.split('');
          backwards = backwards.reverse();
          backwards = backwards.join('');

          if ( forwards === backwards) {
              this.setState({ palindrome: "F'sure, dawg! You got yerself a pally!" });
          } else {
              this.setState({ palindrome: "Aw snap, dawg. I'm sorry but this ain't no pally..." });
          }
      }

    render() {
        return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }>Check</button>
            <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
        </div>
        )
    }
}

export default Palindrome;
