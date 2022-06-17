import RoutesPage from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
