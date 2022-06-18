
import './App.css';

import { BrowserRouter } from "react-router-dom";
import MainRoutes from './Components/MainRoutes';
import { AuthProvider } from './Components/Auth';
import { ToProvider } from './Components/ContexApi';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </ToProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
