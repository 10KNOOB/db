import Navbar from "./global/Navbar";
import Hero from "./home/Hero";
import ProjectsSample from "./home/ProjectsSample";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div>
      <Cursor />
      <Navbar />
      <>
        <Hero />
        <ProjectsSample />
      </>
    </div>
  );
}

export default App;
