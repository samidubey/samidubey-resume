import React from "react";

import { Segment, Image } from "semantic-ui-react";

import { segmentStyleLeft } from "../styles/default";

class HeaderLeft extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Segment width={13} style={segmentStyleLeft} floated="left">
        <Image
          src="/static/Samridhi.jpg"
          size="small"
          circular
          floated="left"
          verticalAlign="middle"
        />
        <h1
          style={{
            margin: 0,
            padding: 0,
            fontSize: 32,
            display: "inline-block"
          }}
        >
          Samridhi Dubey
        </h1>
        <h3 style={{ marginTop: 5, fontSize: 18 }}>
          Salesforce Certified Administrator
        </h3>
      </Segment>
    );
  }
}

export default HeaderLeft;
