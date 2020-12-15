import React from 'react';
import './SupremeDraft.css';
import * as api from '../../api.js'
import Pack from '../../components/Pack/Pack.js'
import Pool from '../../components/Pool/Pool.js'

class SupremeDraft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packs: [],
      picks: []
    }
    // console.log('test')
  }

  componentDidMount() {
    api.generateCubePacks(18).then(packs => {
      this.setState({
        packs: packs
      })
      console.log(packs)
    })
  }

  onPicks(picks) {
    this.setState({
      packs: this.state.packs.slice(1),
      picks: [...this.state.picks, ...(picks.map(index => this.state.packs[0][index]))]
    }, () => {
      if(this.state.packs.length == 0) {
        this.props.onDone(this.state.picks)
      }
    })
  }

  render() {
    return (
      <div className="SupremeDraft">
        <div className="panel-area">
          After clicking 2 cards, you will go to the next pack. You can undo your first pick by clicking it again.
        </div>
        <div className="panel-area PackArea">
          <div className="Draft-large">Pack ({this.state.packs.length} remaining):</div>
          {
            this.state.packs.length
              ? <Pack key={this.state.packs.length} onPicks={this.onPicks.bind(this)} cards={this.state.packs[0]} />
              : null
          }
        </div>
        <div className="panel-area PoolArea">
          <div className="Draft-large">Picks:</div>
          <Pool cards={this.state.picks}/>
        </div>
      </div>
    )
  }
}

export default SupremeDraft;
