import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import { Link } from "gatsby"
import profpic from "../images/circle-pp.png"
import Header from "../components/header"

import pink from "../images/pink.png"
import blue from "../images/blue.png"
import yellow from "../images/yellow.png"

import indexStyles from "./index.module.css"

export default function Home() {
  return (
    <Header>
      {/* background blobs */}
      <img src={pink} id="pink" alt="" />
      <img src={yellow} id="yellow" alt="" />
      <img src={blue} id="blue" alt="" />
      <Container>
        <div className={indexStyles.intro}>
          <img
            className={indexStyles.profpic}
            src={profpic}
            alt="emily and tanya"
          />

          <div className={indexStyles.bio}>
            <h2>Welcome to buddiesonly! </h2>
            <p>
              We're so excited to have you here! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </Container>
    </Header>
  )
}
