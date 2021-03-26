import Stats from "stats.js";
import useIsDebug from "./useIsDebug";

const isDebug = useIsDebug();
let stats: Stats | null = null;

if (isDebug) {
  stats = new Stats();
  document.body.insertAdjacentElement("beforeend", stats.dom);
}

export default () => {
  return (cb: Function) => {
    stats?.begin();
    cb();
    stats?.end();
  };
};
