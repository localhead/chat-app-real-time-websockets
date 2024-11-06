import { MainSection } from "./sections/MainSection";
import { Sidebar } from "./sections/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
