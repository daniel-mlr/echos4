import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

// data
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Les Échos du Pacifique
        <br />
        
        <span style={headingAccentStyles}>Site temporaire pour la transition vers Gatsby 4</span>
      </h1>
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