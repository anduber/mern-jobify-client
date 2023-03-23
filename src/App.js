import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AddJob,
  Stats,
  SharedLayout,
  Profile,
  AllJobs,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/add-jobs" element={<AddJob />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
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
