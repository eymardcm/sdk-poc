import { Button } from "@mui/material";

function App() {

  const handleButtonClick = () => {
    window["start"]()
  }
  return (
    <div className="App">
      <Button variant="contained" onClick={handleButtonClick}>Socure Start</Button>
    </div>
  );
}

export default App;
