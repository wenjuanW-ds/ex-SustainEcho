import React from 'react'
import PropTypes from 'prop-types'
import Node from "../Node/node";


export default class NodeList extends React.Component{

    static propTypes = {
        cards: PropTypes.array.isRequired,
        DeleteCard:PropTypes.func.isRequired
    }

   render(){

        const {cards,DeleteCard} = this.props
      return(
          <div>
              {
                  cards.map((card, index) => {
                      return (<Node DeleteCard={DeleteCard} index={index} card={card} key={index} />)
                  })
              }
          </div>
      )
   }
}