import { About } from "./components/About";
import { Blog } from "./components/Blogs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Product";
import { Review } from "./components/Reviews";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
