// custom typefaces

exports.shouldUpdateScroll = ({
    routerProps: { location },
  }) => {
    const { pathname } = location
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/projects/`, `/blog/`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
      window.scrollTo(0, 0)
    }
  
    return false
  }