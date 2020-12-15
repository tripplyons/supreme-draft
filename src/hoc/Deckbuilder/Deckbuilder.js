import React from 'react';
import './Deckbuilder.css';
import * as api from '../../api.js'
import Pack from '../../components/Pack/Pack.js'
import Pool from '../../components/Pool/Pool.js'

class Deckbuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      sideboard: []
    }
  }

  moveToDeck(name) {
    this.setState({
      cards: [...this.state.cards, this.state.sideboard.filter(card => card.name == name)[0]],
      sideboard: this.state.sideboard.filter(card => card.name != name)
    })
  }

  moveToSideboard(name) {
    this.setState({
      cards: this.state.cards.filter(card => card.name != name),
      sideboard: [...this.state.sideboard, this.state.cards.filter(card => card.name == name)[0]]
    })
  }

  render() {
    return (
      <div className="Deckbuilder">
        <div className="Deckbuilder-section">
          Click a card to switch it from your mainboard to your sideboard.
        </div>
        <div className="Deckbuilder-section Deckbuilder-deck">
          <div className="Deckbuilder-large">Mainboard ({this.state.cards.length} cards):</div>
          <Pool cards={this.state.cards} onClick={this.moveToSideboard.bind(this)} />
        </div>
        <div className="Deckbuilder-section">
          <div className="Deckbuilder-large">Sideboard ({this.state.sideboard.length} cards):</div>
          <Pool cards={this.state.sideboard} onClick={this.moveToDeck.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Deckbuilder;
