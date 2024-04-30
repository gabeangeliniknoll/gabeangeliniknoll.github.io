import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Eusymbol from "../components/eusymbol"
import SEO from "../components/seo"

// pdf iles
import CV from "../components/CV"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    <div>
    <div style={{ float: `left`, maxWidth: `65%`, marginBottom: `1.45rem`}}>
    <p>I am a postdoctoral fellow in the <a href="https://www.math.univ-paris13.fr/laga/index.php/fr/">Laboratoire Analyse, G<span>&eacute;</span>om<span>&eacute;</span>trie et Applications</a> at the Universit<span>&eacute;</span> Sorbonne Paris Nord. Previously, I was a postdoctoral researcher at the Freie Universit<span>&#228;</span>t Berlin and Michigan State University. 
      I earned my PhD at Wayne State University under the direction of <a href="https://clasprofiles.wayne.edu/profile/dy8211">Andrew Salch</a>.</p>
    <p>I research interactions between algebraic topology, arithmetic, and geometry. Specifically, I am interested invariants of ring spectra, such as algebraic K-theory and Hochschild homology, as well as chromatic, equivariant, and motivic homotopy theory. </p>
		<p>In addition to my research activity, I have had the opportunity to teach a broad range of courses, 
      mentor research projects and theses, and organize several conferences and seminars. For a more detailed description of my activities see my <CV />.</p>
    </div>
    <div style={{marginLeft: `70%`, maxWidth: `30%`, marginBottom: `1.45rem` }} > 
     <Image />
    </div> 
    <div clear="both"></div>
    <div style={{ float: `left`, maxWidth: `100%`, marginBottom: `1.45rem`}}>
    <h2>Current Events</h2>
    <p>I am currently co-organizing a conference on <a href="https://www.math.univ-paris13.fr/~harpaz/realk/">Real algebraic K-theory and Trace methods</a> in Paris - Aubervilliers to take place May 27 - 31 2024.</p>
    <h2>Contact</h2>
      <h3>Pronouns:</h3>
        <p>He/Him/His</p>
      <h3>Email:</h3> 
        <p>University Email: <a href="mailto:angelini-knoll@math.univ-paris13.fr">angelini-knoll</a> (at math dot univ-paris13 dot fr)<br></br>Personal Email: <a href="mailto:gabe.angelini.knoll@gmail.com">gabe.angelini.knoll</a> (at gmail dot com)</p>
      <h3>Address:</h3> 
      <p>D<span>&eacute;</span>partement de math<span>&eacute;</span>matiques<br>  
      </br>Institut Galil<span>&eacute;</span>e<br>  
      </br>Universit&eacute; Sorbonne Paris Nord<br>
      </br>99 av. JB Cl<span>&eacute;</span>ment<br>
      </br>FR-93430 Villetaneuse</p>
    <h2>Funding</h2>
      <p>This project has received funding from the European Union's Horizon 2020 research and innovation programme under the Marie Sk<span>&#322;</span>odowska-Curie grant agreement No 1010342555.</p>
      <div style={{marginLeft: `0%`, maxWidth: `5%`, marginBottom: `1rem` }} ><Eusymbol /></div>
    <h2>Resources</h2>
      <p> <a href=" https://www.europeanwomeninmaths.org/">European Women in Mathematics</a>, <a href="https://awm-math.org/ ">Association for Women in Mathematics</a>, <a href="http://lgbtmath.org/index.html">Spectra</a>, <a href="https://s.wayne.edu/isaksen/algebraic-topology-journals/">Algebraic Topology Journals</a>, <a href="https://researchseminars.org/">Online Research Seminars</a>, 
      <a href="https://s.wayne.edu/echt/">eCHT</a>,<a href="http://mathmeetings.net/at-gt">MathMeetings</a>, <a href="https://faculty.math.illinois.edu/K-theory/Calendar/">K-theory Calender</a></p>
    <h2>Collaborators</h2>
      <p><a href="https://www.math.univ-paris13.fr/~ausoni/">C. Ausoni</a>, <a href="https://www3.nd.edu/~mbehren1/">M. Behrens</a>, <a href="https://math.ucsd.edu/~ebelmont/">E. Belmont</a>, <a href="https://dlculver.github.io/">D. Culver</a>, <a href="https://users.math.msu.edu/users/teena/Home.html">T. Gerhardt</a>, <a href="https://math.mit.edu/directory/profile.php?pid=2073">J. Hahn</a>, <a href="https://www.math.ucla.edu/~mikehill/">M. Hill</a>, <a href="https://evahoening.netlify.app/">E. H<span>&#246;</span>ning</a>, <a href="https://hanajiakong.github.io/">H. Kong</a>, <a href="https://www.math.upenn.edu/~mmerling/">M. Merling</a>, <a href="https://www.maximilienperoux.com/">M. P<span>&#233;</span>roux</a>, <a href="https://quigleyjd.github.io/">J.D. Quigley</a>, <a href="https://clasprofiles.wayne.edu/profile/dy8211">A. Salch</a>, <a href="https://www.mn.uio.no/math/personer/vit/rognes/">J. Rognes</a>, <a href="https://dylwil3.github.io/">D. Wilson</a></p>
    </div>
    </div>
  </Layout>
)

export default IndexPage
