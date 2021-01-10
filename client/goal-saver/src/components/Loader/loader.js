import Loadable from "react-loadable";

const LoadingComponent = Loadable({
  loader: () => import("./index"),
  loading: () => null,
});

export default LoadingComponent;
