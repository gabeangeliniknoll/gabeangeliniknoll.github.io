import React from "react"
import ShortResearchStatement from "../static/threepager-research-angeliniknoll.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={ShortResearchStatement}> short research statement</a>
  </>
)

export default IndexPage

