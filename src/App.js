import Layout from "./components/layout/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
