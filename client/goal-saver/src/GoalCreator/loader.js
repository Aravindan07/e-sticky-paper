import Loadable from "react-loadable";
import Loading from "../components/Loader";

export const GoalCreator = Loadable({
  loader: () => import("./index"),
  loading: Loading,
  delay: 5,
});
