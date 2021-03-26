import { GUI } from "dat.gui";
import useIsDebug from "./useIsDebug";

const isDebug = useIsDebug();
const gui = new GUI();

if (!isDebug) gui.hide();

export default () => {
  return gui;
};
