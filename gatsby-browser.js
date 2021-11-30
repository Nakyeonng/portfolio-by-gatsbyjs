// custom typefaces

const React = require("react")
const Layout = require("./src/components/layout")

exports.onRouteUpdate = () => {
    if (typeof window !== `undefined`) { window.scrollTo(0, 0)}
  }
  
  exports.shouldUpdateScroll = args => {
     return false;
  };
