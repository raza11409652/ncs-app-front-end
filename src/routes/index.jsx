import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "../component/header";
import History from "../container/history";
import HomePage from "../container/home";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="history" element={<History />} />
          <Route path="history/:id" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
