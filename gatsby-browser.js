// custom typefaces

exports.onRouteUpdate = () => {
    if (typeof window !== `undefined`) { window.scrollTo(0, 0)}
    // window.scrollTo(0, 0)
    // console.log("top!")
}
  
exports.shouldUpdateScroll = () => {
    window.scrollTo(0, 0)
    // return false;
};

exports.onClientEntry = () => {
    console.log("Welcome!")
}