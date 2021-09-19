import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import storage from "./store";

ReactDOM.render(
  <Provider store={storage()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
