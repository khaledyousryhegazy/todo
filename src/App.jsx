import { Inputs } from "./components/Inputs";
import { Tasks } from "./components/Tasks";
import { TaskProvider } from "./components/taskReducer";

function App() {
  return (
    <div className="container py-24">
      <TaskProvider>
        <Inputs />
        <Tasks />
      </TaskProvider>
    </div>
  );
}

export default App;
