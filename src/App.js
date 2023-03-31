import './App.css';
import ExplorePage from "./pages/explorePage/explorePage";
import Navigation from "./containers/navigation/navigation";
import AboutUs from "./pages/aboutUs/aboutUs";
import Categories from "./containers/categories/categories";

function App() {
  return (
    <div>
        <Navigation />
        <ExplorePage />
        <AboutUs />
        <Categories />
    </div>
  );
}

export default App;

