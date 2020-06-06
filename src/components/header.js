import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.css"

export default function Header({ children }) {
  return (
    <div>
      <header className={headerStyles.container}>
        <Link className={headerStyles.titleLink} to="/">
          <h1 className={headerStyles.title}>buddiesonly</h1>
        </Link>
        <div className={headerStyles.nav}>
          <Link className={headerStyles.navLink} to="/about/">
            About
          </Link>
          <Link className={headerStyles.navLink} to="/posts/">
            Posts
          </Link>
        </div>
      </header>
      {children}
    </div>
  )
}
