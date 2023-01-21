import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Register, Landing, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
        {/* <h1>JObify</h1>
        <Landing /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
