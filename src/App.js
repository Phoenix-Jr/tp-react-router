import "./App.css";
import ErrorPage from "./component/Error";
import Footer from "./component/Footer";
import Header from "./component/Header";

import First from "./component/page1";
import Second from "./component/page2";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
