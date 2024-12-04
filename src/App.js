import "./App.css";
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
      <div>
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseContext /> */}
        {/* <UseRef /> */}
        {/* <UseReducer /> */}
        {/* <UseLayoutEffect /> */}
        {/* <UseMemo /> */}
        <UseCallBack />
      </div>
    </LoginContextProvider>
  );
}

export default App;
