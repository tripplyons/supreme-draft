import React from 'react';
import './Simulator.css';
import * as api from '../../api.js'
import SupremeDraft from '../SupremeDraft/SupremeDraft.js'
import Deckbuilder from '../Deckbuilder/Deckbuilder.js'

class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
      drafting: true
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="Simulator">
        {
          this.state.drafting
          ?
            <SupremeDraft packs={18} onDone={(picks) => {
              this.setState({
                cards: picks,
                drafting: false
              })
            }}/>
          :
            <Deckbuilder cards={this.state.cards} />
        }

      </div>
    )
  }
}

export default Simulator;
