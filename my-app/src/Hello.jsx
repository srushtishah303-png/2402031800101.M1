function Hello() {

 const getName = (yourName) => {
    return yourName;
  }

  function handleClick() {
    alert("Button clicked!");
  }

  const handleInput = (event) => {
    console.clear();
    console.log("Input value:", event.target.value);
  }

  const name = "Srushti Shah"
  
   const handleMouseOver = () => {
    console.log("Mouse over the paragraph!");
  }

  const handleDoubleClick = () => {
    console.log("Double clicked the paragraph!");
  }

  return (
    <>
      <h1>Hello {getName(name)}</h1>
     <h2>Welcome to React JS</h2>

      <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("Hello, Srushti Shah!")}>Say Hello</button>
      <br />
      <input type="text" onChange={handleInput} placeholder="Type Something..." />
    </>
  )
}

export default Hello