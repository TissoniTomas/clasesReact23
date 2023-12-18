import React from "react";
import "./App.css";

// COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// PROPS => strings, arrays, booleans, functions, objetos, todo tipo de datos

const user1 = "Daniel Di Salvo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    // Binding
    // this.handlerCounterUp = this.handlerCounterUp.bind(this);
  }

  handlerCounterUp = () => {
    // console.log("Hiciste click en el btn");
    this.setState({ counter: this.state.counter + 1 });
  };

  handlerCounterDown = () => {
    // console.log("Hiciste click en el btn");
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
        {/* <Header
        title="Soy un title desde una prop"
        subtitle="Soy un subtitulo desde una prop"
        bgColor="orange"
        borderColor="black"
      />
      */}
        <Header
          title="Soy otra prop con un title"
          subtitle="Soy otro subtitulo desde una prop!!!"
        />
        <NavBar />
        <ItemListContainer />
        <div className="UserSection">
          <UserCard
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            name={user1}
            date="Se unió en Enero 2021"
            description="Front-end Developer y profesor del Curso de React.js en CoderHouse"
          />
          <UserCard
            name="Raul Gutierrez"
            date="Se unió en Abril 2021"
            description="Scrum Master y UX Designer en Mercado Libre"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          />
          <UserCard
            name="Francesca Bertotti"
            date="Se unió en Julio 2021"
            description="DevOps y profesora del curso de React.js en CoderHouse"
            img="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          />
        </div>
        <div className="CounterSection">
          <p>Counter: {this.state.counter}</p>
        </div>
        <div className="btn-section">
          <button className="btn" onClick={this.handlerCounterUp}>
            Incrementar
          </button>
          <button className="btn" onClick={this.handlerCounterDown}>
            Decrementar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
