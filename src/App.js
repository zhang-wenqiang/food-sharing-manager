import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">App</div>

      {/**路由 */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/layout" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
