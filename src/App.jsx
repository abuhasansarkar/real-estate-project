import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./routers/Routers";

function App() {
  return (
    <div className="MainContainer">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
