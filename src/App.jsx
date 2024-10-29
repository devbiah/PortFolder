import { BrowserRouter } from "react-router-dom";
import { Navbar, About, Experience, Tech, Contact, Main } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen">
        <div className="bg-primary bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Main />
        </div>
        <About />
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
