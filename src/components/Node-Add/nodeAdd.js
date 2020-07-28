import React from 'react'
import {Button, Toolbar,TextField} from "@material-ui/core";
import PropTypes from 'prop-types'



export default class NodeAdd extends React.Component{

   static propTypes ={
     AddCard: PropTypes.func.isRequired,
   }
   state = {
      text: ''
   }

   handleSubmit = () =>{
      // collect input
      const card = this.state
      this.props.AddCard(card)
      this.setState({
         text:''
      })

   }

   handleChange = (event) =>{
      const text = event.target.value
      this.setState({text})
   }

   render(){
      const {text} = this.state
      return(

          <Toolbar>
             <TextField id="outlined-basic" size="small" label="Outlined"  value={text} onChange={this.handleChange}/>
             <br/>
             <Button size="large" color="primary" variant="contained" onClick={this.handleSubmit}>New Node</Button>
          </Toolbar>

      )

   }
}