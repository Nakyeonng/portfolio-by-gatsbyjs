import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { useLocation } from "@reach/router"

//상단 헤더 + 푸터부분 (구조 완성 - css 남음! 액션이랑)

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)

  const {pathname} = useLocation()
  console.log(pathname)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`} 
    onLoad={alert('click!')}>
      {/*header*/}
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          {/*header - logo*/}
          <div className="site-head-logo">
            <Link to={`/`}>nkxworks
              {/* <StaticImage
                alt="logo"
                src="../assets/images/logo_black.png"
              /> */}
            </Link>
          </div>
          
          {/*header - nav*/}
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu" >
              <li className="nav-home nav-current" role="menuitem">
                <Link 
                  to={`/`} 
                  activeClassName="active"
                  >Project</Link>
              </li>
              <li className="nav-blog" role="menuitem">
                <Link to={`/blog`} 
                  activeClassName="active"
                  >do-ob</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}
                  activeClassName="active"
                  >About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/*container*/}
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
     
      {/*footer*/}
    </div>
  )
}

export default Layout
