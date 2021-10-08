import "./App.css";
import Header from "./components/Header";
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container col-lg-6 mt-3 bg-light">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
