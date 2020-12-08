import React, { Component } from "react";
import VirtualizedList from "../UI/VirtualizedList/VirtualizedList";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Divider from "@material-ui/core/Divider";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Friends extends Component {
  state = {
    loading: true,
    friends: []
  };

  componentDidMount() {
    console.log("heyeye");
    this.props.list.forEach(id => {
      console.log(id);
      axios
        .get("/users/show.json?user_id=" + id)
        .then(response => {
          console.log(response);
          this.setState(prevState => {
            return {
              friends: prevState.friends.concat({
                name: response.data.screen_name,
                url: response.data.profile_image_url_https
              }),
              loading: false
            };
          });
        })
        .catch(error => console.log(error));
    });
  }

  render() {
    return this.state.loading ? (
      <CircularProgress color="secondary" />
    ) : (
      <div
        style={{
          height: "250px",

          border: "1px solid grey"
        }}
      >
        <Typography color="secondary" variant="subtitle1" align="center">
          Followings Who Don't follow you back{" "}
        </Typography>

        <VirtualizedList list={this.state.friends} />
      </div>
    );
  }
}

export default withErrorHandler(Friends, axios);
