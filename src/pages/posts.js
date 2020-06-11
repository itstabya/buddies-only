import React from "react"
import Header from "../components/header"
import Container from "../components/container"

import { graphql } from "gatsby"
import pink from "../images/pink.png"
import background from "../images/budsonly-light.png"

import postStyles from "./posts.module.css"
import { Link } from "gatsby"


const Description = props => (
  <div className={postStyles.section}>
    <p className={postStyles.emoji}>{props.emoji}</p>
    <div className={postStyles.text}>
    <h2 className={postStyles.categoryTitle}>
      <Link className={postStyles.link} to={props.link}>
    {props.categoryTitle}
    </Link>
    </h2>
    <p className={postStyles.description}>{props.description}</p>
    </div>
  </div>
)


export default function Posts() {
  return (
    <Header>
      <Container>
        {/* background bits */}
        <img src={pink} id="pink" alt="" />
        <img src={background} className={postStyles.background} alt=""/>
        <div>
          <h2 className={postStyles.title}>What Are You in the Mood for?</h2>
        </div>
        <Description
          emoji="🥐"
          link="/buddybites/"
          categoryTitle="buddybites"
          description="despite what you might think the posts in this category are NOT actually about biting ur buddies. infact i would advise against such behavior as it’s not normally popular or generally accepted."
          />
          <Description
            emoji="💌"
            link="/buddyblessings/"
            categoryTitle="buddyblessings"
            description="buddy, let me share with u some blessings. click here for posts about things that we love. don’t be shocked if u read posts about milk and/or an oily yogurt called noosa. i’m not hating on the yogurt i’m just stating facts."
            />
            <Description
            emoji="📚"
            link="/studybuddy/"
            categoryTitle="studdybuddy"
            description="uhhhhhhhhhhhh. charlie brown says that if u try to work when ur tired, it will upset ur thinking. so take a nap when u need one, ok? here you can read about anything related to school. we’re qualified to write about that bc we both go to one."
            />
            <Description
            emoji="🚀"
            link="/beyondbuddies/"
            categoryTitle="beyondbuddies"
            description="to infinity and beyond! anything else that we did not account for. would u go to space if u could? it will affect ur bones negatively. "
            />
      </Container>
    </Header>
  )
}


