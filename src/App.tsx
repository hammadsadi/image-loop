import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

type Props = {};

const App = (props: Props) => {
  return <RouterProvider router={routes} />;
};

export default App;
