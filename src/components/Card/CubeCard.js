import React from 'react';
import * as api from '../../api.js';
import Card from './Card.js';

class CubeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      set: null,
      imagePath: null
    }
    console.log(props.name)
  }

  componentWillMount() {
    this.setState({
      set: 'CUBE',
      imagePath: process.env.PUBLIC_URL + '/img/' + btoa(this.state.name.split(' // ')[0]) + '.png'
    })
  }

  render() {
    return (
      <Card onClick={this.props.onClick} name={this.state.set} set={this.state.set} imagePath={this.state.imagePath} style={
        {
          width: '150px', borderRadius: '10px', margin: '2px', ...this.props.style
        }}/>
    )
  }
}

export default CubeCard;
