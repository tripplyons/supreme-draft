import React from 'react';
import CubeCard from '../Card/CubeCard.js';
import './Pack.css';

class Pack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picksLeft: 2,
      picks: []
    }
  }

  pick(index) {
    if(!this.state.picks.includes(index)) {
      this.setState({
        picksLeft: this.state.picksLeft - 1,
        picks: [...this.state.picks, index]
      }, () => {
        if(this.state.picksLeft == 0) {
          this.props.onPicks(this.state.picks)
        }
      })
    } else {
      // remove it if you click it again
      this.setState({
        picksLeft: this.state.picksLeft + 1,
        picks: this.state.picks.filter(pick => pick != index)
      })
    }
  }

  render() {
    return (
      <div className="Pack">
        {
          this.props.cards.map((card, index) =>
            <CubeCard onClick={e => this.pick(index)} key={index} name={card.name} style={{opacity: this.state.picks.includes(index) ? '0.5' : '1.0'}}/>
          )
        }
      </div>
    )
  }
}

export default Pack;
