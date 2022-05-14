import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
// import AppNavbar from "./component/header";
import AppRoutes from "./routes";
function App() {
  return (
    <>

      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
