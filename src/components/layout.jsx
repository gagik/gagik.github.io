import React from "react"
import Footer from "../components/footer"
import "../styles/index.scss"
import Header from "./header"

const Layout = props => {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer flipped={props.flipped} />
    </div>
  )
}

export default Layout
