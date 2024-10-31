import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Country from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":country" element={<Country />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-5 md:px-0"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
