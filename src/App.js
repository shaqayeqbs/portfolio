import Routes from "./Routes";
import ErrorBoundary from "./@core/Error/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import store from "./@core/redux";
import { Provider } from "react-redux";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          rtl={true}
          limit={1}
        />
        <Routes />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
