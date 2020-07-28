import React from 'react'
import NodeAdd from "../Node-Add/nodeAdd";
import { AppBar, Container} from "@material-ui/core";

import NodeList from "../Node-List/nodeList";


export default class App extends React.Component {

      state = {
            cards: [
                {text:'React'}
            ]
        }


    AddCard = (card) => {
          const {cards} = this.state
          cards.unshift(card)
          this.setState(cards)

    }

    DeleteCard = (index) => {
          console.log("index:" ,index)
          const {cards} = this.state
          cards.splice(index,1)
        this.setState({
            cards
        })

    }

    render() {

        const {cards} = this.state

        return (
            <div>

                <AppBar position="static" color='inherit' className="AppBar">
                    <NodeAdd AddCard={this.AddCard}/>
                </AppBar>
                <NodeList  cards={cards} DeleteCard={this.DeleteCard}/>

            </div>
        )
    }
}