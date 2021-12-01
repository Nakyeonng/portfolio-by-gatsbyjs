// custom typefaces

const React = require("react")
const Layout = require("./src/components/layout")
const ProjectPost = require("./src/pages/project-post")

exports.onRouteUpdate = () => {
    // if (typeof window !== `undefined`) { window.scrollTo(0, 0)}
    window.scrollTo(0, 0)
    console.log("top!")
}
  
exports.shouldUpdateScroll = args => {
    return false;
};

exports.onClientEntry = () => {
    console.log("We've started!")
}