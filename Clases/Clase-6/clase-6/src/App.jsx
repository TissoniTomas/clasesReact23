

const items = [
  {nombre: "Bicicleta", precio: 500},
  {nombre: "Monitor", precio: 300},
  {nombre: "Celular", precio: 80},
  {nombre: "Teclado", precio: 50},
  {nombre: "Mouse", precio: 30},
  {nombre: "Headset", precio: 20},
  {nombre: "Laptop", precio: 700},
]
// map => Helper de array recorrer una estructura de datos (array) y me permite devolver alguina de las propiedades de los objetos.

// map (callback) = map(function (argumento){}) = map ((item)=>)
const App = ()=>{
  return(
    <>
    <div className=" flex flex-col items-center mt-10">
      <h1 className="text-3xl text-red-700">Hello World!</h1>

      {console.log(items.map((item, idx)=>`${idx + 2} | Nombre : ${item.nombre}` ))}
      
    </div>
    
    
    </>
  )
}

export default App