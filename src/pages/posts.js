import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

import pink from "../images/pink.png"




export default function Posts() {
  return (
    <Header>
      <Container>
        {/* background blobs */}
       <img src={pink} id="pink"/>
      <div>
        <h2>What the Buds be up to</h2>
      </div>
      </Container>
    </Header>
  )
}
