import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nike from "./Pages/Nike";
import NotFound from "./Pages/NotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nike />}></Route>
          <Route path="/pagename" element={<component name />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;