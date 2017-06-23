import { Component } from "react";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";

const my_api = "http://192.168.1.15:3001";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.AllChatGrabber = this.AllChatGrabber.bind(this);
    this.contentAdder = this.contentAdder.bind(this);
  }
  componentWillMount() {
    this.AllChatGrabber();
  }
  contentAdder(data) {
    var i = 0;
    while (i < data.length) {
      if (data[i].responded != 1) {
        $(".chats-contrainer")
          .first()
          .append(
            "<div style='background:#ddd' onClick=window.open('/admin-chat/" +
              data[i].code +
              "','_self')>" +
              data[i].name +
              "</div><div style='clear:both;'></div>"
          );
      } else {
        $(".chats-contrainer")
          .first()
          .append(
            "<div onClick=window.open('/admin-chat/" +
              data[i].code +
              "','_self')>" +
              data[i].name +
              "</div><div style='clear:both;'></div>"
          );
      }
      i++;
    }
  }
  AllChatGrabber() {
    var e = this;
    axios({
      method: "post",
      url: my_api + "/all-chats-admin",
      data: { code: "admin" }
    }).then(function(response) {
      // console.log(response.data);
      e.contentAdder(response.data);
    });
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
        <h2>
          Admin Panel
        </h2>
        <p>All Chats</p>
        <div className="chats-contrainer" />
      </div>
    );
  }
}

export default Admin;
