import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      set: props.set,
      zIndex: 0
    }
  }

  render() {
    return (
      <div className="Card-container">
        <div className="Card-hoverbox" onClick={this.props.onClick} onMouseOver={e => this.setState({zIndex: 1})} onMouseOut={e => this.setState({zIndex: 0})}></div>
        <img className="Card" onClick={this.props.onClick} style={{...this.props.style, zIndex: this.state.zIndex}} src={this.props.imagePath} />
      </div>
    )
  }
}

export default Card;
