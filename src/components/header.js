import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header

export default function Header(){
  return(
    <div className={headerStyles.container}>
      <Link className={headerStyles.titleLink}to="/"><h1 className={headerStyles.title}>buddiesonly</h1></Link>
      <div className={headerStyles.nav}>
          <Link className={headerStyles.navLink} to="/about/">About</Link>
          <Link className={headerStyles.navLink} to="/posts/">Posts</Link>
      </div>
    </div>
  )
}