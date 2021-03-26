const isDebugMode = window.location.hash === "#debug";

export default () => {
  return isDebugMode;
};
