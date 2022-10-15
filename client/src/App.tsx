import { UserAuthProvider } from "./context/AuthContext";
import Hello from "./components/Hello";

const App = () => (
  <UserAuthProvider>
    <Hello />
    <div className="App">hi</div>
  </UserAuthProvider>
);

export default App;
