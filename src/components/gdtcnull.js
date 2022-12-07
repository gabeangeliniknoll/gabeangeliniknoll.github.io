import React from "react"
import Cnull from "../static/gdt-nullstellensatz.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Cnull}>abstract</a>
  </>
)

export default IndexPage

