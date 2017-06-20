import { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.AllChatGrabber = this.AllChatGrabber.bind(this);
    this.contentAdder = this.contentAdder.bind(this);
  }
  contentAdder(data) {
    var i = 0;
    while (i < data.length) {
      if (data.sender != 1) {
        $(".chats-contrainer")
          .first()
          .append(
            "<div style='float:left;'>" +
              data.msg +
              "</div><div style='clear:both;'></div>"
          );
      } else {
        $(".chats-contrainer")
          .first()
          .append(
            "<div style='float:right;'>" +
              data.msg +
              "</div><div style='clear:both;'></div>"
          );
      }
    }
    var wtf = $(".chatBox").first();
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
  }
  AllChatGrabber() {
    axios({
      method: "post",
      url: "http://localhost:3001/all-chats-admin",
      data: { code: "admin" }
    }).then(function(response) {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <h2>
          Admin Panel
        </h2>
        <p>All Chats</p>
        <div class="chats-contrainer" />
      </div>
    );
  }
}

export default Admin;
