import React from "react";

import { Segment, List } from "semantic-ui-react";

import { segmentStyleRight } from "../styles/default";

class HeaderRight extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment width={3} floated="right" style={segmentStyleRight}>
                <List>
                    <List.Item>
                        <List.Icon name="point" size="large" />
                        <List.Content>
                            <h4>Berlin, Germany</h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="mail" size="large" />
                        <List.Content>
                            <h4>
                                <a href="mailto:sd77574@gmail.com">
                                    sd77574@gmail.com
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="call" size="large" />
                        <List.Content>
                            <h4>+49-152 515 76677</h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="cloud" size="large" />
                        <List.Content>
                            <h4>
                                <a href="http://certification.salesforce.com/certification-detail?conId=0034A00002qOz9SQAS">
                                    Certification
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="linkify" size="large" />
                        <List.Content>
                            <h4>
                                <a href="https://trailhead.salesforce.com/en/me/00550000007WomHAAS">
                                    Trailhead
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="linkedin" size="large" />
                        <List.Content>
                            <h4>
                                <a href="https://www.linkedin.com/in/samridhi-dubey/">
                                    LinkedIn
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default HeaderRight;
