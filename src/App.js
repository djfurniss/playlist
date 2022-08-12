import "./App.css";
import Header from "./Header";
import MahjongContainer from "./MahjongContainer";

function App() {
  return (
  <>
      <Header/>
    <div className="container-fluid px-4">
      <MahjongContainer/>
    </div>
  </>
  );
}

export default App;