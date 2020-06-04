import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import { Link } from "gatsby"
import profpic from "../images/circle-pp.png"

export default function Home() {
  return (
    <Layout>
      <img
<<<<<<< HEAD
        src="src/images/profile-pic.jpg"
        style={{ flex: 96, width: 96, height: 96, margin: 0 }}
=======
        src={profpic}
        style={{ flex: 96, width: 150, height: 150, margin: 0 }}
>>>>>>> 65c341e5b0fa212afb8686e5bfa3b73a1e61ed9c
        alt="emily and tanya"
      ></img>
      <h2 style={{ marginLeft: 300, padding: 0 }}>Welcome to buddiesonly!</h2>

      <p
        style={{
          flex: 1,
          marginLeft: 300,
          padding: 12,
        }}
      >
        We're so excited to have you here!
      </p>
      <Link to="/test/">Click 2 see header on test page</Link>
    </Layout>
  )
}
