import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderDish(dish){
        if (dish != null) {
            return(
                <div key={dish.id}>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><h4>{dish.name}</h4></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comment){
        if (comment != null) {

            const date = new Date(comment.date);
            let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let formattedDate = "" + date.getDate();
            
            if (formattedDate.length === 1)
            {
                formattedDate = "0" + formattedDate;
            }
                
            return(
                <div key={comment.id}>
                        <CardTitle>{comment.comment}</CardTitle>
                        <CardTitle>{"-- " + comment.author + ", " 
                                            + monthArray[date.getMonth()] + " " 
                                                + formattedDate + ", " 
                                                    + date.getFullYear()}</CardTitle>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render(){

        let selectedDish = this.props.dish;

        if (selectedDish != null){
            return(
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                {this.renderDish(selectedDish)}
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <CardTitle><h3>Comments</h3></CardTitle>
                                {selectedDish.comments.map((comment) => {return (this.renderComments(comment));})}
                            </div>
                        </div>
                    </div>
                );
        }

        else
        {
            return(
                <div></div>
            );
        }  
        
    }
}

export default DishDetail;