import "./App.css"

const App = () => {
  const name = "Tomas Tissoni"
  let city = "CABA"
  // Todo lo que indiquemos entre llaves sera interpretado como codigo JS

  return (
    <>
      <div className="App">
        <h1>Bienvenido usuario</h1>
        <span>Su nombre es {name}</span>
        <span>Su ciudad es {city}</span>
        <p>Numero = {60/2}</p>
        <p>{name.toLocaleUpperCase()}</p>
        <label htmlFor="name">Introduzca su {name}</label>
        <input type="text" name="" id="" />
      </div>
      
    
    </>
  );
  // Codigo JSX = JavaScript Extension
};

export default App;
