import "../counter/Counter.css"

const Counter = ( {restar, sumar, contador, onAdd} ) => {
  return (
    <div className="divContador">
        <button onClick={restar}>-</button>
        <h4>{contador}</h4>
        <button onClick={sumar}>+</button>
        <div className="divAgregar">
          <button onClick={()=>onAdd(contador)} className="btnAgregar">Agregar al carrito</button>
        </div>
    </div>
  )
}

export default Counter