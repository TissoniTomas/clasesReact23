import { useState } from "react";
import "./App.css";

// COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// PROPS => strings, arrays, booleans, functions, objetos, todo tipo de datos

const user1 = "Daniel Di Salvo";

const App = () => {
  const [counter, setCounter] = useState(10);

  const handlerCounterUp = () => {
    // console.log("Hiciste click en el btn");
    setCounter(counter + 1);
  };

  const handlerCounterDown = () => {
    // console.log("Hiciste click en el btn");
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      
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
        <p>Counter: {counter}</p>
      </div>
      <div className="btn-section">
        <button className="btn" onClick={handlerCounterUp}>
          Incrementar
        </button>
        <button className="btn" onClick={handlerCounterDown}>
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default App;
