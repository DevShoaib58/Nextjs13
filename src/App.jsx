import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nike from "./Pages/Nike";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nike />}></Route>
          <Route path="/pagename" element={<component name />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;