import React, {Component} from 'react';
import Item from './Components/Item/Item';
import InputItem from './Components/InputItem/InputItem'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    newItemName: '',
    activeItem: '',
    buttonDisabled: true,
    items: [
      {name: 'Postacie'},
      {name: 'Zwierzęta'},
      {name: 'Miasta'},
      {name: 'Przedmioty'},
      {name: 'Rośliny'},
    ]
  }

  listenNewItemHandler = (event) => {
    const newItemName = event.target.value;
    this.setState({ newItemName: newItemName})
    if(newItemName.trim() !== '' && newItemName.trim().length > 2) {
      this.setState({buttonDisabled: false})
    } else {
      this.setState({buttonDisabled: true})
    }
  }

  saveNewItemHandler = () => {
    let newItemName = this.state.newItemName.trim();
    newItemName = newItemName.charAt(0).toUpperCase() + newItemName.slice(1)
    const newItem = {name: newItemName};
    const newItems = [...this.state.items];
    newItems.push(newItem);
    this.setState({
      items: newItems,
      newItemName: '',
      buttonDisabled: true
    })
  }

  setActiveItemHandler = (event) => {
    this.setState({activeItem: event.target.innerHTML});
  }

  render() {

    let items = (
      <ul className="list">
        {this.state.items.map(item => {
          return(
            <Item 
              name={item.name}
              click={(event) => this.setActiveItemHandler(event)} currentItem={this.state.activeItem}/>
          )
        })}
      </ul>
    )

    let activeItem = null;

    if(this.state.activeItem !== '') {
      activeItem = <p>Selected item: <span>{this.state.activeItem}</span></p>
    }



    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <InputItem
            change={(event) => this.listenNewItemHandler(event)}
            save={this.saveNewItemHandler}
            newItemName={this.state.newItemName}
            buttonDisabled={this.state.buttonDisabled}/>
          {activeItem}
          {items}
        </div>
      </div>
    );
  }
}

export default App;
