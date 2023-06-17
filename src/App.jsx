import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
