import React, { Component } from 'react'
import Card from './Card/Card'
import './App.css';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      cards: [
        {
          title: "cars parking",
          imgUrl:
            "https://images.unsplash.com/photo-1588239005383-6c6e73cfebac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80",
          author: "Mohamed Reda",
          description: "cars parked on street near brown & white   ",
          price: 5,
        },
        {
          title: "Giza pyramids",
          imgUrl:
            "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          author: "2H Media",
          description: "two pyramids in the desert with a blue sky",
          price: 10,
        },
        {
          title: "wooden building",
          imgUrl:
            "https://images.unsplash.com/photo-1668437642406-e209301da37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          author: "Sies Kranen",
          description: "a wooden building in a field photo",
          price: 3,
        },
        {
          title: "wooden building",
          imgUrl: 
          "https://images.unsplash.com/photo-1588239005383-6c6e73cfebac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80",
          author: "Sies Kranen",
          description: "a wooden building in a field photo",
          price: 3,
        },
        {
          title: "wooden building",
          imgUrl:
            "https://images.unsplash.com/photo-1668437642406-e209301da37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          author: "Sies Kranen",
          description: "a wooden building in a field photo",
          price: 3,
        },
        {
          title: "wooden building",
          imgUrl: null,
          author: "Sies Kranen",
          description: "a wooden building in a field photo",
          price: 3,
        },
      ],
    }
  }

  increasePrice = (index) => {
    let myCards = [...this.state.cards];
    // deep copy new array
    myCards[index].price += 1;
    this.setState({ cards: myCards });
  };

  deleteCards = (index) => {
    let myCards = [...this.state.cards];
    myCards.splice(index, 1);
    this.setState({ cards: myCards });
  };

  render() {
    return <>
      <div className="container ">
        <div className="row">
          {this.state.cards.map((card, index) => (
            <div className="col-md-4 mb-4">
              <Card
                key={index}
                cardInfo={card}
                increasePrice={this.increasePrice}
                deleteCard={this.deleteCards}
                index={index}
              />
            </div>
          ))}
        </div>

      </div>
    </>
  }
}
