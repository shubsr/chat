import { Component } from "react";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";

const my_api = "http://192.168.1.15:3001";

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

class AdminChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "admin",
      time: 0,
      msg: "",
      userCode: props.url.query.code
    };
    this.contentAdder = this.contentAdder.bind(this);
    this.msgGrabber = this.msgGrabber.bind(this);
  }
  componentDidMount() {
    axios({
      method: "post",
      url: my_api + "/admin-responded",
      data: {
        code: this.state.code,
        userCode: this.state.userCode
      }
    });
    this.msgGrabber();
  }
  msgSubmit(e) {
    e.preventDefault();
    var dis = this;
    if (this.state.msg != "") {
      var msg_val = this.state.msg;
      this.setState({ msg: "" });
      axios({
        method: "post",
        url: my_api + "/admin-sender",
        data: {
          msg: msg_val,
          code: this.state.code,
          userCode: this.state.userCode
        }
      });
    }
  }
  contentAdder(data) {
    if (data.sender != 1) {
      $(".chatBox")
        .first()
        .append(
          "<div style='float:right;'>" +
            data.msg +
            "</div><div style='clear:both;'></div>"
        );
    } else {
      $(".chatBox")
        .first()
        .append(
          "<div style='float:left;'>" +
            data.msg +
            "</div><div style='clear:both;'></div>"
        );
    }
    var wtf = $(".chatBox").first();
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
  }
  msgGrabber() {
    var time_val = this.state.time;
    if (this.state.time == 0) {
      time_val = 1111;
      this.setState({ time: time_val });
    }
    var code_val = this.state.code;
    var e = this;
    axios({
      method: "post",
      url: my_api + "/admin-chat",
      data: {
        time: time_val,
        code: code_val,
        userCode: this.state.userCode
      }
    }).then(function(response) {
      if (response.data.length != 0) {
        e.setState({ time: response.data[response.data.length - 1].time });
        var i = 0;
        while (i < response.data.length) {
          e.contentAdder(response.data[i]);
          i += 1;
        }
      }
      setTimeout(e.msgGrabber, 800);
    });
  }
  render() {
    return (
      <div>
        <Head>
          <title>Chat With User</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        </Head>
        <div>
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
        </div>
      </div>
    );
  }
}

export default AdminChat;
