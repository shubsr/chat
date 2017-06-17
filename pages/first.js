import { Component } from "react";
import Head from "next/head";
import styled from "styled-components";

const ChatBox = styled.div`
    width:200px;
    height:200px;
    overflow:auto;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello" };
    this.contentAdder = this.contentAdder.bind(this);
  }
  contentAdder() {
    // alert(this.state.value);
    // const value = document.getElementsByClassName("chatBox")[0].innerHTML;
    $(".chatBox").first().append("<br/>" + this.state.value);
    var wtf = $(".chatBox").first();
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
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
        <button onClick={this.contentAdder}>
          Click To Add
        </button>
        <ChatBox className="chatBox" />
      </div>
    );
  }
}

export default Index;
