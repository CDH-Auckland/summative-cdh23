import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
