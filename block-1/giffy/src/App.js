import "./App.css";
import axios from "axios";
import StandardImageList from "./components/giffies";
function App() {
  const getData = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=WgUwxzrVNkOpanXTJa6cUGW94VQqfaLO&q=${"batman"}&limit=25&offset=0&rating=g&lang=en`
    );
    console.log(res);
  };
  getData();
  return (
    <div>
      <StandardImageList />
    </div>
  );
}

export default App;
