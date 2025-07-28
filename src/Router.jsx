import App from "./App";
import { CategoryProvider } from "./CategoryContext";

const Router = () => (
  <CategoryProvider>
    <App />
  </CategoryProvider>
);

export default Router;

