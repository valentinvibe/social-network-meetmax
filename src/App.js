import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Main userList={props.userList} messagesArray={props.messagesArray}/>
    </div>
  );
}

export default App;
