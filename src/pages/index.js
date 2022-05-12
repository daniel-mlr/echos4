import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Link to="/about">À propos</Link>
      <h1> Les Échos du Pacifique</h1>
      <h2>Site temporaire pour la transition vers Gatsby 4</h2>
      <p>Il comprendra</p>
      <ul>
        <li>Layout</li>
        <ul>
          <li>le setting SEO</li>
          <li>le jumbotron</li>
          <li>le Concert Grid Card</li>
          <li>le Blog grid card</li>
        </ul>
      </ul>
    </main>
  )
}

export default IndexPage