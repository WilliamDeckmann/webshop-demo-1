// Imports
import Header from "./Header";
import Hero from "./Hero";
import ProductContainer from "./ProductContainer";
import About from "./About";
import Footer from "./Footer";



// Function
function App() {
  return (
    <div className="Wrapper">
      <main className="Main">
        <Header />
        <Hero />
        <ProductContainer />
        <About />
        <Footer />
      </main>
    </div>
  );
};

// Export
export default App;
