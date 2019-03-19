import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Card from './components/Card';
import NavBar from './components/NavBar';
import cards from './cards.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isGuessCorrect: true,
      cards: cards,
      score: 0,
      maxScore: 12,
      topScore: 0,
      message: 'CLICK AN IMAGE TO BEGIN!',
    };
  }

  // Main click handler function
  handleSaveClick = id => {
    // Variable to hold the tiles state.
    const cardz = this.state.cards;
    // Search through character tiles to find the one that matches the clicked id.
    const cardClicked = cardz.filter(card => card.id === id);

    // If the card isn't clicked...
    if (!cardClicked[0].clicked) {
      // set it to now be clicked
      cardClicked[0].clicked = true;
      // call this function to register the correct guess
      this.handleCorrectClick();

      // randomize character cards
      this.shuffleCards(cardz);

      this.setState({ cardz });
    } else {
      this.handleIncorrectClick();
    }
  };

  shuffleCards = characters => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  // Handler for correct guesses/clicks
  handleCorrectClick = () => {
    this.setState({ isGuessCorrect: true });
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: 'CONGRATS! YOU WIN!',
        messageClass: 'correct',
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: 'YOU GUESSED CORRECTLY!',
        messageClass: 'correct',
      });
    }
  };

  // Handler for incorrect guesses/clicks
  handleIncorrectClick = () => {
    this.setState({
      message: 'INCORRECT. PLAY AGAIN?',
      isGuessCorrect: false,
    });
    this.resetGame();
  };

  // Resets the game
  resetGame = id => {
    const cardz = this.state.cards;
    for (let i = 0; i < cardz.length; i++) {
      cardz[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  render() {
    const { message, score, cards, topScore } = this.state;
    const title = {
      bb: 'Bikini Bottom',
      clicky: 'Clicky Game',
    };
    return (
      <Wrapper>
        <NavBar message={message} score={score} topScore={topScore} />
        <Title bb={title.bb} clicky={title.clicky} />
        <div className='container'>
          <div id='cards-row' className='row justify-content-center'>
            {cards.map(card => (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                image={card.image}
                clicked={card.clicked}
                clickHandler={this.handleSaveClick}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
