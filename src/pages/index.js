import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"

export default function Home() {
  return (
    <Layout>
      <img
        src="../img/profile-pic.jpg"
        style={{ flex: 96, width: 96, height: 96, margin: 0 }}
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
    </Layout>
  )
}
