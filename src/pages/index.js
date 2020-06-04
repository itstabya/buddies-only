import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import { Link } from "gatsby"
import profpic from "../images/circle-pp.png"
import Header from "../components/header"

export default function Home() {
  return (
    <Header>
      <Container>
        <img
          src={profpic}
          style={{ flex: 96, width: 150, height: 150, margin: 0 }}
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
      </Container>
    </Header>
  )
}
