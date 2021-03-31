import React from "react";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import SideBar from "./components/side_bar/Side_bar"
import Content from "./components/content/Content"
import {side_bar_hidden} from "./components/jq-modules/jq-modules"

class App extends React.Component {
  render(){
    return(
      <div className={"Wrapper Root__Wrapper"}>
          <SideBar />
          <div className={"Wrapper-Page"}>
              <div onClick={()=>side_bar_hidden()} className={"Wrapper-Shadow"}></div>
              <Header />
              <Content />
              <Footer />
          </div>
      </div>
    )
  }
}

export default App;