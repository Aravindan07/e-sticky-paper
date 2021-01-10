import Loadable from "react-loadable";
import Loading from "../components/Loader";

export const Goals = Loadable({
  loader: () => import("./index"),
  loading: Loading,
  delay: 5,
});
