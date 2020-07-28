import React from 'react';
import {Card,CardActionArea,CardActions,CardContent,Button,Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import More from "../../Node-item/Node-item";
import './index.css'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable'
import IconButton from "@material-ui/core/IconButton";



export default class Node extends React.Component{

    static propTypes ={
        card:PropTypes.object.isRequired,
        DeleteCard: PropTypes.func.isRequired,
        index:PropTypes.number.isRequired,
    }

    handleDelete = () => {
        const {DeleteCard,index} = this.props


        if (window.confirm('sure delete ?')){
            DeleteCard(index)
        }
    }

    render() {
        const {card} = this.props

        return (
            <Draggable>
            <Card className='Card-style' >
                <CardActionArea>
                    <CardContent>
                        <Typography>
                            {card.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton  aria-label="delete" color="secondary" onClick={this.handleDelete}><DeleteIcon  /></IconButton>
                    <More/>
                </CardActions>
            </Card>
            </Draggable>

        );
    }

}
