import React from "react"
import Masters from "../static/mastersthesis.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Masters}>pdf</a>
  </>
)

export default IndexPage
