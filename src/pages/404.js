import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import pink from "../images/pink.png"
import blue from "../images/blue.png"
import yellow from "../images/yellow.png"
import doggy from "../images/404pup.jpg"
import { Link } from "gatsby"


const NotFoundPage = () => (
  <Header>
    <img src={pink} id="pink" alt="" />
    <img src={yellow} id="yellow" alt="" />
    <img src={blue} id="blue" alt="" />
    <Container>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>Let's get you back <Link to="/">home!</Link></p>
    <img src={doggy} alt=""/>
  
    </Container>
  </Header>
)

export default NotFoundPage
