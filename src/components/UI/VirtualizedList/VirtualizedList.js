import React from "react";

import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";

export default function VirtualizedList(props) {
  return (
    <div>
      <List
        style={{
          height: "200px",
          overflowY: "scroll"
        }}
      >
        {props.list.map(el => {
          return (
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={el.name} src={el.url} />
                </ListItemAvatar>
                <ListItemText primary={el.name} />
              </ListItem>
              <Divider light />
            </div>
          );
        })}
      </List>
    </div>
  );
}
