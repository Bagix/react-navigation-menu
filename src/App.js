import React, {Component} from 'react';
import Item from './Components/Item/Item';
import InputItem from './Components/InputItem/InputItem'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    newItemName: '',
    activeItem: '',
    items: [
      {name: 'Postacie'},
      {name: 'Zwierzęta'},
      {name: 'Miasta'},
      {name: 'Przedmioty'},
      {name: 'Rośliny'},
    ]
  }

  listenNewItemHandler = (event) => {
    this.setState({newItemName: event.target.value})
  }

  saveNewItemHandler = () => {
    if(this.state.newItem !== '') {
      const newItem = {name: this.state.newItemName};
      const newItems = [...this.state.items];
      newItems.push(newItem);
      this.setState({
        items: newItems,
        newItemName: ''
      })
    }
  }

  setActiveItemHandler = (event) => {
    console.log(event.target.innerHTML);
    this.setState({activeItem: event.target.innerHTML});
  }

  render() {

    let items = (
      <ul>
        {this.state.items.map(item => {
          return(
            <Item 
              name={item.name}
              click={(event) => this.setActiveItemHandler(event)} currentItem={this.state.activeItem}/>
          )
        })}
      </ul>
    )

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <InputItem
            change={(event) => this.listenNewItemHandler(event)}
            save={this.saveNewItemHandler}
            newItemName={this.state.newItemName} />
          {items}
        </div>
      </div>
    );
  }
}

export default App;
