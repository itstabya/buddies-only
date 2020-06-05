import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

import pink from "../images/pink.png"
import blue from "../images/blue.png"
import yellow from "../images/yellow.png"

export default function About() {
  return (
    <Header>
      <Container>
        {/* background blobs */}
        <img src={pink} id="pink"/>
        <img src={yellow} id="yellow"/>
        <img src={blue} id="blue"/>
        
      <div>
        <h2>About me</h2>
        <p>the buddies only site is about to come to life!</p>
      </div>
      </Container>
    </Header>
  )
}
