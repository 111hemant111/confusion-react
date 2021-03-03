import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import {DISHES} from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes:DISHES,
      selectedDish: null
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;






import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import {DISHES} from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes:DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({selectedDish: dish});
}

  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;