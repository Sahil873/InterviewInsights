import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Appbar from "./components/Appbar";

const App = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path={"/experiences"} element={<Home />} />
        <Route path={"/new"} element={<New />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
