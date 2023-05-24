import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="list" element={<List />} exact />
      </Routes>
    </div>
  );
};

export default App;
