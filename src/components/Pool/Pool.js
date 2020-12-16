import React from 'react';
import CubeCard from '../Card/CubeCard.js';
import './Pool.css';

// temporarily using blacklists for KLD, fix that

class Pool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards
    }
    this.cmcGroups = [
      [0],
      [1],
      [2],
      [3],
      [4],
      [5],
      [6,7,8,9,10,11,12,13,14,15,16]
    ]
  }

  render() {
    return (
      <div className="Pool">
        {
          this.cmcGroups.map((cmcs, index) =>
            <div className="Pool-col column-mode" key={index}>
              {
                this.props.cards.filter(card => cmcs.includes(card.cmc)).map((card, index2) =>
                  <CubeCard key={card.name} name={card.name} onClick={e => this.props.onClick(card.name)}/>
                )
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default Pool;
