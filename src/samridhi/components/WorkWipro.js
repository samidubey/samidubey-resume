import React from "react";

import { List } from "semantic-ui-react";

class WorkWipro extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <List.Item>
                <List.Content
                    style={{
                        paddingLeft: 10,
                        marginTop: 15
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 22
                        }}
                    >
                        Senior Software Engineer, Wipro Technologies. -
                        Hyderabad, India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Dec 2012 - Nov 2014 (2 years)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Lead the Operation Team of 3, handling and
                            supporting Opentext Website Content Manager(WSM)
                        </List.Item>
                        <List.Item as="li">
                            Facilitated planning, allocation and monitoring of
                            tasks among team members
                        </List.Item>
                        <List.Item as="li">
                            Collaborating with Onsite Coordinator with respect
                            to project status and goal alignment
                        </List.Item>
                        <List.Item as="li">
                            Co-ordinate the issues about Project requirements
                            (Software, Hardware, Resources) to Project Manager /
                            Onsite Coordinator
                        </List.Item>
                        <List.Item as="li">
                            Managing servicing tickets in Remedy with team and
                            providing regular SLA reports
                        </List.Item>
                        <List.Item as="li">
                            Went onsite (Reading, UK) for upgradation of
                            Opentext Website Content Management Tool
                        </List.Item>
                        <List.Item as="li">
                            Monitoring and maintaining website infrastructure
                            for Opentext WSM for client
                        </List.Item>
                        <List.Item as="li">
                            Enhancement/Development of new
                            templates/css/javascript files as per client
                            requirements
                        </List.Item>
                        <List.Item as="li">
                            Supporting integration with other backend Java/J2EE
                            applications
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default WorkWipro;
