import React from "react"
import Header from "../components/header"
import Container from "../components/container"

import pink from "../images/pink.png"
import blue from "../images/blue.png"
import yellow from "../images/yellow.png"
import stockemily from "../images/stockemily.png"
import stocktanya from "../images/stocktanya.png"
import hey from "../images/hey.png"
import bye from "../images/bye.png"

import aboutStyles from "./about.module.css"

export default function About() {
  return (
    <Header>
      {/* background blobs */}
      <img src={pink} id="pink" alt="" />
      <img src={yellow} id="yellow" alt="" />
      <img src={blue} id="blue" alt="" />
      <img src={hey} id={aboutStyles.hey} alt="hey there buddy!" />
      <Container>
        <div className={aboutStyles.blurb}>
          <h2>About the Club</h2>
          <p>
            buddiesonly really be thriving out here! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className={aboutStyles.blurb}>
          <h2>About Us</h2>
          <div className={aboutStyles.bios}>
            <div id={aboutStyles.emily} className={aboutStyles.bio}>
              <img
                className={aboutStyles.bioPic}
                src={stockemily}
                alt="emily, smiling"
              />
              <div className={aboutStyles.bioBlurb}>
                <h3 style={{ marginBottom: 10 }}>Emily J.</h3>
                <p>
                  Emily is Bertie in disguise. Beware. Bertie says: I am a third
                  year at Cornell, and I love milk.
                </p>
              </div>
            </div>
            <div id={aboutStyles.tanya} className={aboutStyles.bio}>
              <img
                className={aboutStyles.bioPic}
                src={stocktanya}
                alt="tanya, smiling"
              />
              <div className={aboutStyles.bioBlurb}>
                <h3 style={{ marginBottom: 10 }}>Tanya Y.</h3>
                <p>
                  I'm currently a third year at MIT, and I don't love milk. I do
                  love Noosa and ice pops.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={aboutStyles.blurb}>
          <h2>Contact Us</h2>
          <p>
            Want to chat about one of our posts? Share an idea? Talk about a
            crazy dream you had last night? We’re excited to hear from you!
            Email us at{" "}
            <a href="mailto:thebuddiesonly@gmail.com">
              thebuddiesonly@gmail.com
            </a>{" "}
            and we’ll try to respond as soon as possible.
          </p>
        </div>
      </Container>
      <img
        src={bye}
        style={{ width: 500, float: "right", marginRight: 80 }}
        alt="love, emily and tanya"
      />
    </Header>
  )
}
