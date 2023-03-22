function Buttons(props) {
  const onNumberPressedHandler = (event) => {
    props.onDataGet(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="h-3/4">
      <div className="bg-green-300 mb-1">
        <button className="w-1/4 border">+</button>
        <button className="w-1/4 border">-</button>
        <button className="w-1/4 border">*</button>
        <button className="w-1/4 border">/</button>
      </div>
      <div className="bg-gray-500 mb-1">
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={1}>1</button>
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={2}>2</button>
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={3}>3</button>
      </div>
      <div className="bg-gray-500 mb-1">
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={4}>4</button>
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={5}>5</button>
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={6}>6</button>
      </div>
      <div className="bg-gray-500 mb-1">
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={7}>7</button>
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={8}>8</button>
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={9}>9</button>
      </div>
      <div className="bg-gray-500">
        <button className="w-1/3 border" onClick={onNumberPressedHandler} value={0}>0</button>
        <button className="w-1/3 border">.</button>
        <button className="w-1/3 border">=</button>
      </div>
    </div>
  );
}

export default Buttons;
