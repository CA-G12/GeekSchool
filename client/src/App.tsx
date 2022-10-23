import { UserAuthProvider } from "./context/AuthContext";
import AssignmentModal from './components/AssignmentModal'

const App = () => (
  <UserAuthProvider>
    <div className="App">hi</div>
    <AssignmentModal />
  </UserAuthProvider>
);

export default App;
