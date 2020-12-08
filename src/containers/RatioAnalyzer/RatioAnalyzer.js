import React, { Component } from "react";
import axios from "axios";
import notInOp from "../../utility/notInoperator";
import Cockpit from "../../components/Cockpit/Cockpit";
import RatioDisplay from "../../components/RatioDisplay/RatioDisplay";
import Friends from "../../components/Friends/Friends";
import Followers from "../../components/Followers/Followers";
import GridWrapper from "../../components/UI/GridWrapper/GridWrapper";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class RatioAnalyzer extends Component {
  state = {
    screenName: "",
    show1: false,
    show2: false,
    friends: [],
    followers: []
  };

  onChangeHandler = event => {
    this.setState({
      screenName: event.target.value
    });
  };

  followersRec = (cursor, name) => {
    if (cursor == "0") {
      this.setState({
        show2: true
      });
      return;
    }
    axios
      .get(
        "/followers/ids.json?stringify_ids=true&screen_name=" +
          name +
          "&cursor=" +
          cursor
      )
      .then(response => {
        console.log(response);

        this.setState(prevState => {
          return {
            followers: prevState.followers.concat(response.data.ids)
          };
        });

        this.followersRec(response.data.next_cursor_str, name);
      })
      .catch(error => console.log(error));
  };

  followers = name => {
    this.followersRec("-1", name);
  };

  friends = name => {
    axios
      .get("/friends/ids.json?stringify_ids=true&screen_name=" + name)
      .then(response => {
        console.log(response);

        this.setState({ friends: response.data.ids, show1: true });
      })
      .catch(error => console.log(error));
  };

  clickHandler = () => {
    const screenName = this.state.screenName;
    this.setState({
      show1: false,
      show2: false,
      friends: [],
      followers: []
    });
    this.friends(screenName.toString());
    this.followers(screenName.toString());
  };

  render() {
    let frOnly;
    let foOnly;
    let frCount;
    let foCount;
    if (this.state.show1 && this.state.show2) {
      frOnly = notInOp(this.state.friends, this.state.followers);
      foOnly = notInOp(this.state.followers, this.state.friends);
      frCount = this.state.friends.length;
      foCount = this.state.followers.length;
      console.log(frOnly);
      console.log(this.state.friends);
    }

    return (
      <div>
        <Cockpit
          onChangeHandler={this.onChangeHandler}
          clickHandler={this.clickHandler}
        />

        {this.state.show1 && this.state.show2 ? (
          <div>
            <RatioDisplay
              frCount={frCount}
              foCount={foCount}
              ratio={foCount / frCount}
            />
            <GridWrapper>
              <Friends list={frOnly} />
              <Followers list={foOnly} />
            </GridWrapper>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withErrorHandler(RatioAnalyzer, axios);
