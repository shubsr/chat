import { Component } from "react";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";

const ChatContainer = styled.div`
  display:none;
  ${props => props.code != "" && `
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
const SubmitButton = styled.input`
`;
const NameInput = styled.input`
  
`;
const InputForm = styled.form`
  ${props => props.code != "" && `
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
      email: "",
      mobile: "",
      code: "",
      time: 0,
      msg: "",
      sending: 0,
      scanning: 0
    };
    this.contentAdder = this.contentAdder.bind(this);
    this.validator = this.validator.bind(this);
    this.msgGrabber = this.msgGrabber.bind(this);
  }
  contentAdder(data) {
    if (data.sender != 1) {
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
  validator() {
    if (
      this.state.name != "" &&
      this.state.email != "" &&
      this.state.mobile != "" &&
      this.state.msg != ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  msgSubmit(e) {
    e.preventDefault();
    var dis = this;
    if (this.state.msg != "") {
      var msg_val = this.state.msg;
      this.setState({ msg: "" });
      axios({
        method: "post",
        url: "http://localhost:3001/user-chat",
        data: { msg: msg_val, code: this.state.code }
      });
    }
  }
  msgGrabber() {
    var time_val = this.state.time;
    var code_val = this.state.code;
    var e = this;
    axios({
      method: "post",
      url: "http://localhost:3001/user-chat-grabber",
      data: {
        time: time_val,
        code: code_val
      }
    }).then(function(response) {
      if (response.data.length != 0) {
        e.setState({ time: response.data[response.data.length - 1].time });
        // alert(response.data[0]["date"]);
        var i = 0;
        while (i < response.data.length) {
          e.contentAdder(response.data[i]);
          i += 1;
        }
      }
      setTimeout(e.msgGrabber, 800);
    });
  }
  charStart(e) {
    e.preventDefault();
    var dis = this;
    if (this.validator()) {
      var name_val = this.state.name;
      var email_val = this.state.email;
      var mobile_val = this.state.mobile;
      var msg_val = this.state.msg;
      var d = new Date();
      var crrTime = d.getTime();
      this.setState({ time: crrTime });
      this.setState({ name: "", email: "", mobile: "", msg: "" });
      axios({
        method: "post",
        url: "http://localhost:3001/user-register",
        data: {
          name: name_val,
          email: email_val,
          mobile: mobile_val,
          msg: msg_val
        }
      }).then(function(response) {
        // console.log(response.data.code);
        dis.setState({ code: response.data.code });
        // dis.msgGrabber(response.data.code);
        dis.msgGrabber();
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
        <ChatContainer code={this.state.code}>
          <ChatBoxWrapper><ChatBox className="chatBox" /></ChatBoxWrapper>
          <form
            onSubmit={e => {
              this.msgSubmit(e);
            }}
          >
            <input
              value={this.state.msg}
              onChange={e => {
                this.setState({ msg: e.target.value });
              }}
            />
            <button type="submit">
              Snd Msg
            </button>
          </form>
        </ChatContainer>
        <InputForm
          code={this.state.code}
          onSubmit={e => {
            this.charStart(e);
          }}
        >
          <NameInput
            value={this.state.name}
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
            placeholder="Enter Name"
          />
          <input
            type="text"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
            value={this.state.email}
            placeholder="Enter Email"
          />
          <input
            type="text"
            onChange={e => {
              this.setState({ mobile: e.target.value });
            }}
            value={this.state.mobile}
            placeholder="Enter Mobile"
          />
          <input
            type="text"
            onChange={e => {
              this.setState({ msg: e.target.value });
            }}
            value={this.state.msg}
            placeholder="Enter Your Message"
          />
          <button type="submit">Start Chat</button>
        </InputForm>
      </div>
    );
  }
}

export default Index;
