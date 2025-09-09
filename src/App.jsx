import "./App.css";
import Child from "./components/Child.jsx";

function App() {
  const users = ["Lars", "Jim aka Bobo aka Bob", "Lyn", "Jan Inge"];

  const objUsers = [
    {
      id: 1,
      name: "Ola Nordmann",
      email: "ola.nordmann@example.com",
      role: "admin",
    },
    {
      id: 2,
      name: "Kari Nordmann",
      email: "kari.nordmann@example.com",
      role: "user",
    },
    {
      id: 3,
      name: "Per Hansen",
      email: "per.hansen@example.com",
      role: "editor",
    },
  ];

  return (
    <>
      <Child name="Kine" />
    </>
  );
}

export default App;
