import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import { createContext } from "react";
import UseContext from "./components/UseContext";
import LoginContextProvider from "./context/LoginContextProvider";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseMemo from "./components/UseMemo";
import UseCallBack from "./components/UseCallBack";

// export const LoginContext = createContext();

function App() {
  return (
    <LoginContextProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/use-state">UseState</Link>
            </li>
            <li>
              <Link to="/use-effect">UseEffect</Link>
            </li>
            <li>
              <Link to="/use-context">UseContext</Link>
            </li>
            <li>
              <Link to="/use-ref">UseRef</Link>
            </li>
            <li>
              <Link to="/use-reducer">UseReducer</Link>
            </li>
            <li>
              <Link to="/use-layout-effect">UseLayoutEffect</Link>
            </li>
            <li>
              <Link to="/use-memo">UseMemo</Link>
            </li>
            <li>
              <Link to="/use-callback">UseCallBack</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-context" element={<UseContext />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-reducer" element={<UseReducer />} />
          <Route path="/use-layout-effect" element={<UseLayoutEffect />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallBack />} />
        </Routes>
      </Router>
    </LoginContextProvider>
  );
}

export default App;
