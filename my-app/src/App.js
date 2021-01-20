import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Login from "./components/Login";

import { useEffect, useState } from "react";

function App() {
  const [islogin, setlogin] = useState(false);
  const handleLogin = (val) => {
    setlogin(val);
  };
  useEffect(() => {
    if(localStorage.getItem("weatherapptoekn"))setlogin(true);
  },[]);

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
