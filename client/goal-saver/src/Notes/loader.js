import Loadable from "react-loadable";
// import Loadable from "../utils/loadable";
import Loading from "../components/Loader";

export const Notes = Loadable({
  loader: () => import("./index"),
  loading: Loading,
  delay: 5,
});
