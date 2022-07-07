import React from "react"
import Layout from "../components/layout"
import Berlin from "../components/berlin"
import SEO from "../components/seo"

const Mini = () => (
  <Layout>
    <SEO title="Mini" />
    <h1>Mini-Symposium: Advances in K-Theory, Symmetry, and Periodicity</h1>
    <div>
    <div style={{ float: `left`, maxWidth: `70%`, marginBottom: `1.45rem`}}>
      <p>This Mini-Symposium is part of the <a href="https://www.mi.fu-berlin.de/dmv2022/">DMV Annual Meeting 2022</a> to be held on September 12-16 in Berlin, Germany. The Mini-symposium will take place on September 16th at 10:30-12:30 and 15:30-17:30. </p>
      <h2>Speakers</h2>
          <ul>
            <li>Jack Morgan Davies, Utrecht University</li> 
            <li>Eva H<span>&#246;</span>ning, Radboud University </li>
            <li>Mikala <span>&#216;</span>rsnes Jansen, University of Copenhagen</li>
            <li>J.D. Quigley, MPI Bonn/University of Oregon</li>
          </ul>
      <h2>Description</h2>
        <p>Interactions between the fields of algebraic K-theory, equivariant homotopy theory, and chromatic homotopy theory, have led to exciting new results with applications to number
theory and geometric topology. The goal of this Minisymposium is to highlight recent advances in Hochschild
homology, algebraic K-theory, equivariant homotopy theory, and chromatic homotopy theory that combine tools from several of these fields, as well as bring together researchers from
these different areas to promote future interactions between these fields.</p>
      <h2>Abstracts: </h2> 
    <p><b>Jack Morgan Davies, Utrecht University</b></p> 
    <p>Many famous results in topology can be proven using operations on various cohomology theories. In this talk, we will discuss two families of stable operations on elliptic cohomology and topological modular forms. These include stable Adams operations, analogous to those on topological K-theory, and stable Hecke operators, inspired by operations in number theory. We will see in some small examples how homotopy theoretic techniques can be used to perform number theoretic calculations. </p>
    <p><b>Eva H<span>&#246;</span>ning, Radboud University</b></p>
    <p>This is a report on joint work with G. Angelini-Knoll, Ch. Ausoni, D. Culver and J. Rognes. I will explain how to prove a strong form of the redshift conjecture for $BP \langle 2 \rangle$  by explicitly computing the mod $(p, v_1, v_2)$  homotopy of its topological cyclic homology.</p>
    <p><b>Mikala <span>&#216;</span>rsnes Jansen, University of Copenhagen</b></p>
    <p>Let R by a ring. The term unstable algebraic K-theory will refer to any (family of) anima K(R,n) built entirely out of linear algebra internal to R^n through which the canonical maps BGL_n(R) –> K(R) factorise. A classical example is Quillen's plus-construction BGL_n(R)^+. Ideally, we want a model for unstable algebraic K-theory to be closer to K(R) than BGL_n(R) is in terms of its nature and properties; for example the fundamental group of the plus-construction is closer to K_1(R) than GL_n(R) is. The term unstable algebraic K-theory was used in the 1970's by Dennis and Stein in a survey of the functor K_2, and classically unstable algebraic K-theory has been used to derive many important computational results about ''stable'' algebraic K-theory.
We introduce a new model for unstable algebraic K-theory inspired by a detailed study of the so-called reductive Borel--Serre compactification of locally symmetric spaces. In this talk I will mention the main results and calculations of this work and also attempt to shed light on the geometric origins of the model, as this is an important and very interesting aspect of the story.
This is joint work with Dustin Clausen.</p>
<p><b>J.D. Quigley, MPI Bonn/University of Oregon</b></p>
<p>Homological stability is a well-studied phenomenon with applications to stable homotopy theory and algebraic K-theory. In this talk, I will introduce Bredon homological stability, an equivariant refinement of homological stability, and discuss some examples. This is joint work with Eva Belmont.</p>
    </div>
    </div>
    <div style={{marginLeft: `70%`, maxWidth: `30%`, marginBottom: `1.45rem` }} > 
      <Berlin />
    </div> 
    <div clear="both"></div>
  </Layout>
)

export default Mini
