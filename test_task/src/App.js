import React from "react";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import SideBar from "./components/side_bar/Side_bar"
import Content from "./components/content/Content"
import {side_bar_hidden} from "./components/jq-modules/jq-modules"

class App extends React.Component {
  render(){
    return(
      <div className={"wrapper"}>
          <SideBar />
          <div className={"wrapper-content"}>
              <div onClick={()=>side_bar_hidden()} className={"wrapper-shadow"}></div>
              <Header />
              <Content />
              <Footer />
          </div>
      </div>
    )
  }
}

export default App;