import { UserAuthProvider } from "./context/AuthContext";
import ClassTest from "./components/ClassTests/ClassTests";

const App = () => (
  <UserAuthProvider>
    <div className="App">
      <ClassTest />
    </div>
  </UserAuthProvider>
);

export default App;
