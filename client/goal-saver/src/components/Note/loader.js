import Loadable from "react-loadable";
import Loading from "../Loader/loader";

export const Note = Loadable({
  loader: () => import("./index"),
  loading: Loading,
  delay: 5,
});
