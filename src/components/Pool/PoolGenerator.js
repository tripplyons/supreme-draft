import React, {useState, useEffect} from 'react'
import * as api from '../../api.js'
import Card from '../Card/Card.js'

export default function PoolGenerator(props) {
  const [cards, setCards] = useState([]);

  return (
    <div>
      {
        cards.length ? cards.map((card, index) => {
          return (
            <Card name={card.name} set={props.set} imagePath={card.imagePath} key={index} />
          )
        }) : null
      }
      <button onClick={() => api.fetchSet(props.set).then(data => {
        // console.log(data)
        setCards(data)
      })}>
        Click me
      </button>
    </div>
  );
}
