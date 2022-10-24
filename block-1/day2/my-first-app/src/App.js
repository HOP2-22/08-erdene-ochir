import './App.css';
// import { Comment } from "./components/list"

function App() {
  const names = ["bob", "mary", "nasaa"];
  return(
    <div>
      <p>Hello World</p>
      {names.map((name) => (
        <div>{name}</div>
      ))}
    </div>
  )
}

export default App;
