import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// pdf iles
import CV from "../components/CV"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    <div>
    <div style={{ float: `left`, maxWidth: `70%`, marginBottom: `1.45rem`}}>
    <p>I am a postdoctoral fellow at the <a href="https://www.math.univ-paris13.fr/laga/index.php/en/">LAGA institute</a> of <a href="https://www.univ-paris13.fr/">Universite Sorbonne Paris Nord</a>.
      This research focused position is funded by <a href="https://www.mathingp.fr/">MathInGreaterParis</a> and hosted by the <a href="https://sciencesmaths-paris.fr/nos-programmes/dim-math-innov">FSMP</a>.</p>
    <p>Previously, I was a postdoctoral researcher at the <a href="https://www.mi.fu-berlin.de/math/groups/top/members/index.html">Freie Universit<span>&#228;</span>t Berlin</a> and <a href="https://math.msu.edu">Michigan State University</a>. 
      I earned my PhD at <a href="https://clas.wayne.edu/math">Wayne State University</a> under the direction of <a href="https://clasprofiles.wayne.edu/profile/dy8211">Andrew Salch</a>.</p>
    <p>I study interactions between algebraic topology, arithmetic and geometry. Specifically, I am interested invariants of ring spectra, such as algebraic K-theory and Hochschild homology, as well as chromatic, equivariant, and motivic homotopy theory. </p>
		<p>In addition to my research activity, I have had the opportunity to teach a broad range of courses, 
      mentor research projects and theses, and organize several conferences and seminars. For a more detailed description of my activities see my <CV />.</p>
    </div>
    <div style={{marginLeft: `70%`, maxWidth: `30%`, marginBottom: `1.45rem` }} > 
     <Image />
    </div> 
    <div clear="both"></div>
    <div style={{ float: `left`, maxWidth: `100%`, marginBottom: `1.45rem`}}>
    <h2>Current Events</h2>
      <p>I am excited to have the opportunity organize a <Link to="/mini2022/">Mini-Symposium</Link> at the <a href="https://www.mi.fu-berlin.de/dmv2022/">DMV Annual Meeting 2022</a> held in Berlin, Germany.</p>
    <h2>Contact</h2>
      <h3>Pronouns:</h3>
        <p>He/Him/His</p>
      <h3>Email:</h3> 
        <p>University Email: <a href="mailto:angelini-knoll@math.univ-paris13.fr">angelini-knoll</a> (at math dot univ-paris dot fr)<br></br>Personal Email: <a href="mailto:gabe.angelini.knoll@gmail.com">gabe.angelini.knoll</a> (at gmail dot com)</p>
      <h3>Address:</h3> 
      <p>Department of Mathematics<br>  
      </br>Institut Galilée<br>  
      </br>Université Paris 13<br>
      </br>99 av. JB Clément<br>
      </br>FR-93430 Villetaneuse</p>
    <h2>Resources</h2>
      <p> <a href=" https://www.europeanwomeninmaths.org/">European Women in Mathematics</a>, <a href="https://awm-math.org/ ">Association for Women in Mathematics</a>, <a href="http://lgbtmath.org/index.html">Spectra</a>, <a href="https://s.wayne.edu/isaksen/algebraic-topology-journals/">Algebraic Topology Journals</a>, <a href="https://researchseminars.org/">Online Research Seminars</a>, <a href="http://mathmeetings.net/at-gt">MathMeetings</a>, <a href="https://faculty.math.illinois.edu/K-theory/Calendar/">K-theory Calender</a></p>
      <h2>Collaborators</h2>
      <p><a href="https://www.math.univ-paris13.fr/~ausoni/">C. Ausoni</a>, <a href="https://www3.nd.edu/~mbehren1/">M. Behrens</a>, <a href="https://math.ucsd.edu/~ebelmont/">E. Belmont</a>, <a href="https://dlculver.github.io/">D. Culver</a>, <a href="https://users.math.msu.edu/users/teena/Home.html">T. Gerhardt</a>, <a href="https://math.mit.edu/directory/profile.php?pid=2073">J. Hahn</a>, <a href="https://www.math.ucla.edu/~mikehill/">M. Hill</a>, <a href="https://evahoening.netlify.app/">E. H<span>&#246;</span>ning</a>, <a href="https://hanajiakong.github.io/">H. Kong</a>, <a href="https://www.math.upenn.edu/~mmerling/">M. Merling</a>, <a href="https://www.maximilienperoux.com/">M. P<span>&#233;</span>roux</a>, <a href="https://e.math.cornell.edu/people/jdq27/">J.D. Quigley</a>, <a href="https://clasprofiles.wayne.edu/profile/dy8211">A. Salch</a>, <a href="https://www.mn.uio.no/math/personer/vit/rognes/">J. Rognes</a>, <a href="https://people.math.harvard.edu/~dwilson/">D. Wilson</a></p>
    </div>
    </div>
  </Layout>
)

export default IndexPage
