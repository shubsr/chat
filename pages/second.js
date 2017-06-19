import { Component } from "react";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";

const ChatBox = styled.div`
    width:200px;
    height:200px;
    overflow:auto;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello", name: "", nameField: "" };
    this.contentAdder = this.contentAdder.bind(this);
    this.nameEntered = this.nameEntered.bind(this);
  }
  contentAdder() {
    $(".chatBox").first().append("<br/>" + this.state.value);
    var wtf = $(".chatBox").first();
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
  }
  nameEntered() {
    var theName = "";
    if (this.state.nameField == "") {
      this.setState({ name: "" });
    } else {
      this.setState({ name: this.state.nameField });
      axios({
        method: "post",
        url: "http://localhost:3001/names",
        data: { name: "Goon3" }
      })
        // axios({
        //   method: "get",
        //   url: "http://localhost:3001/names?name=Goon3"
        // })
        // axios
        //   .get("http://localhost/save/Goon")
        // axios
        //   .get("http://localhost:3001/names?name=Goon1")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        </Head>
        <input
          value={this.state.nameField}
          onChange={e => {
            this.setState({ nameField: e.target.value });
          }}
        />
        <button onClick={this.nameEntered}>Submit Name</button>
        <ChatBox className="chatBox" />
        <div>
          {this.state.name}
        </div>
      </div>
    );
  }
}

export default Index;
