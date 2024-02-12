import React from "react"
import { Link } from "gatsby"
import "./layout.css"


const Layout = ({ children }) => {
    return (
      <div className="layout">
        <header className="header">im the header!</header>
        <main>{children}</main>
        <footer className="footer">
            <Link to="/" className="link-style">Home</Link>
            <Link to="/about" className="link-style">About</Link>
            <Link to="/contact" className="link-style">Contact</Link>
        </footer>
      </div>
    )
  }

export default Layout