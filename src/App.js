import React, { Component } from 'react';
import './App.css';
import Customers from './components/Customers';
import { data } from './data';
import { animateScroll as scroll, Link } from 'react-scroll';

class App extends Component {
  
  renderLinks(quantity) {
    const links = Array(quantity).fill();
    return links.map((d, i) => (
      <button key={i}>
          <Link smooth={true} to={i.toString()}>Ir a Item {i}</Link>
      </button>
    ));
  }

  onClickDown = () => {
    scroll.scrollToBottom();
  }

  onClickUp = () => {
    scroll.scrollToTop();
  }

  onClickMoreDown = () => {
    scroll.scrollMore(300);
  }

  onClickMoreUp = () => {
    scroll.scrollMore(-300);
  }

  render() {
    return (
      <div className="App">
        <h1>Aprender React Scroll</h1>
        <button className="down" onClick={this.onClickDown}>Ir Abajo</button>
        <button className="more-down" onClick={this.onClickMoreDown}>Bajar</button>
        <button className="up" onClick={this.onClickUp}>Ir Arriba</button>
        <button className="more-up" onClick={this.onClickMoreUp}>Subir</button>
        <button onClick={this.test}>Test</button>
        {
          this.renderLinks(10)
        }        
        <Customers data={data}></Customers>
      </div>
    );
  }
}

export default App;
