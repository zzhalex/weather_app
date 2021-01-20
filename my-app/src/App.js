import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Login from "./components/Login";

import { useState } from "react";

function App() {
  const [islogin, setlogin] = useState(true);
  // const doLogin = (val) => {
  //   setlogin(val);
  // };
  // const doLogout = () => {
  //   setlogin(false);
  // };

  const handleLogin = (val) => {
    setlogin(val);
  };
  let main = islogin ? <Display /> : <Login signAction={handleLogin} />;
  return (
    <div className="App">
      <header className="App-header">
        <Header islogin={islogin} signAction={handleLogin} />
      </header>
      <main className="App-main">{main}</main>
    </div>
  );
}
export default App;
