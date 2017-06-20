import { Component } from "react";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";
var _ = require("underscore");

const ChatContainer = styled.div`
  display:none;
  ${props => props.name != "" && `
    display:block;
  `};
`;
const ChatBoxWrapper = styled.div`
  width:240px;
  height:150px;
  border:1px #555 solid;
  position:relative;
`;
const ChatBox = styled.div`
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    max-height:150px;
    overflow:auto;
`;
const SubmitButton = styled.button`
  ${props => props.name != "" && `
    display:none;
  `};
`;
const NameInput = styled.input`
  ${props => props.name != "" && `
    display:none;
  `};
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "",
      nameField: "",
      time: 0,
      msg: "",
      sending: 0,
      scanning: 0,

      chatContent: {}
    };
    this.contentAdder = this.contentAdder.bind(this);
    this.nameEntered = this.nameEntered.bind(this);
    this.chatFetcher = this.chatFetcher.bind(this);
  }
  contentAdder(data) {
    if (data.name != this.state.name) {
      $(".chatBox")
        .first()
        .append(
          "<div style='float:left;'>" +
            data.msg +
            "</div><div style='clear:both;'></div>"
        );
    } else {
      $(".chatBox")
        .first()
        .append(
          "<div style='float:right;'>" +
            data.msg +
            "</div><div style='clear:both;'></div>"
        );
    }
    var wtf = $(".chatBox").first();
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
  }
  nameEntered() {
    var theName = "";
    if (this.state.nameField == "") {
      this.setState({ name: "Unknown" });
    } else {
      this.setState({ name: this.state.nameField });
    }
    this.chatFetcher();
  }
  extend(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
  }
  sendMsg() {
    var lastTime = 0;
    if (this.state.time == 0) {
      var d = new Date();
      var currentTime = d.getTime();
      this.setState({ time: currentTime });
      lastTime = currentTime;
    } else {
      lastTime = this.state.time;
    }
    // alert(lastTime);
    var e = this;
    if (this.state.scanning == 0 && this.state.msg != "") {
      var message = this.state.msg;
      this.setState({ sending: 1, msg: "" });
      axios({
        method: "post",
        url: "http://localhost:3001/chat",
        data: {
          name: this.state.name,
          msg: message,
          time: lastTime
        }
      }).then(function(response) {
        if (e.state.scanning == 0) {
          if (response.data.length != 0) {
            e.setState({ time: response.data[response.data.length - 1].date });
            // alert(response.data[0]["date"]);
            var i = 0;
            while (i < response.data.length) {
              // var contentObj = $.merge(response.data, e.state.chatContent);
              var contentObj = _.extend(response.data, e.state.chatContent);
              console.log(contentObj);
              e.setState({ chatContent: contentObj });

              e.contentAdder(response.data[i]);
              i += 1;
            }
          }
        }
        e.setState({ sending: 0 });

        //console.log(response.data.length);
      });
    }
  }
  chatFetcher() {
    var lastTime = 0;
    if (this.state.time == 0) {
      var d = new Date();
      var currentTime = d.getTime();
      this.setState({ time: currentTime });
      lastTime = currentTime;
    } else {
      lastTime = this.state.time;
    }
    // alert(lastTime);
    var e = this;
    if (this.state.sending == 0) {
      this.setState({ scanning: 1 });

      axios({
        method: "post",
        url: "http://localhost:3001/chat-fetcher",
        data: {
          time: lastTime
        }
      }).then(function(response) {
        if (e.state.sending == 0) {
          if (response.data.length != 0) {
            e.setState({ time: response.data[response.data.length - 1].date });
            // alert(response.data[0]["date"]);
            var i = 0;
            while (i < response.data.length) {
              e.contentAdder(response.data[i]);
              i += 1;
            }
          }
        }
        e.setState({ scanning: 0 });

        //console.log(response.data.length);
      });
    }
    setTimeout(this.chatFetcher, 3000);
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
        <ChatContainer name={this.state.name}>
          <div>
            Name: {this.state.name}
          </div>
          <ChatBoxWrapper><ChatBox className="chatBox" /></ChatBoxWrapper>
          <div>
            dfsxas
          </div>
          <input
            value={this.state.msg}
            onChange={e => {
              this.setState({ msg: e.target.value });
            }}
          />
          <button onClick={() => this.sendMsg(this)}>Snd Msg</button>
        </ChatContainer>
        <NameInput
          value={this.state.nameField}
          onChange={e => {
            this.setState({ nameField: e.target.value });
          }}
          name={this.state.name}
        />
        <SubmitButton onClick={this.nameEntered} name={this.state.name}>
          Submit Name
        </SubmitButton>
      </div>
    );
  }
}

export default Index;
