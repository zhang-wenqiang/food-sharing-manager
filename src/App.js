import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./pages/layout";
import { AuthRoute } from "./components/AuthComponent";

function App() {
  return (
    <BrowserRouter>
      {/**路由 */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/layout"
          element={
            <AuthRoute>
              <Layout />
            </AuthRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
