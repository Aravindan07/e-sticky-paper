import { lazy } from "react";

const LazyLoad = () => lazy(() => import("./index"));

export default LazyLoad;
