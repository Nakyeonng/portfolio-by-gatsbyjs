import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
//νΈν°

const Footer = props => { 
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div>
      {/*footer*/}
      <footer className="site-foot">
        <div className="inner">
            <ul className="foot-sns">
                <li>
                  <a href="#"
                  >Behance</a></li>
                <li>
                  <a href="https://github.com/Nakyeonng" target="_blank"
                  >Github</a></li>
                <li>
                  <a href="https://www.instagram.com/nkxnotes/" target="_blank"
                  >Instagram</a></li>
            </ul>
            <p className="copyright"> &copy; {new Date().getFullYear()} &nbsp;
            <Link to={`/`}>nakyeong lee</Link> Β· self-coded π©βπ»</p>
        </div>
      </footer>
    </div>
  )
}


export default Footer

