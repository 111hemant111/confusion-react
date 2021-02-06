import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        let selectedDish = props.dish;
        console.log(selectedDish);
        console.log(props.comments);
        if (selectedDish != null){
            return(
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish dish = {selectedDish} />
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <CardTitle><h3>Comments</h3></CardTitle>
                                {props.comments.map((comment) => {return (
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