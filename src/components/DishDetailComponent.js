import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
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

    function RenderComments({comment}){
        if (comment != null) {
            
            const date = new Date(comment.date);
            let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let formattedDate = "" + date.getDate();
            
            if (formattedDate.length === 1)
            {
                formattedDate = "0" + formattedDate;
            }
           
            return(
                <div>
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

    const DishDetail = (props) => {

        console.log('Dishdetail Component render invoked');
        let selectedDish = props.dish;

        if (selectedDish != null){
            return(
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish dish = {props.dish} />
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <CardTitle><h3>Comments</h3></CardTitle>
                                {selectedDish.comments.map((comment) => {return (
                                    <div key={comment.id}>
                                        <RenderComments comment = {comment}/>
                                    </div>
                                    );})}
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

export default DishDetail;