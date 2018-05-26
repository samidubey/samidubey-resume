import React from "react";

import { List } from "semantic-ui-react";

class WorkInfosys extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <List.Item>
                <List.Content style={{ paddingLeft: 10 }}>
                    <h2
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 22
                        }}
                    >
                        Senior Consultant, Infosys Ltd. - Hyderabad, India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Nov 2014 - Dec 2016 (2 years 2 months)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Led and managed the team of 8 members working on
                            various projects which used Salesforce and OpenText
                            products
                        </List.Item>
                        <List.Item as="li">
                            Administration and support of the Opentext WSM
                        </List.Item>
                        <List.Item as="li">
                            Implemented new enhancements including creation of
                            custom objects, workflows, email alerts and
                            templates
                        </List.Item>
                        <List.Item as="li">
                            Recommend improvements to existing systems and
                            processes.
                        </List.Item>
                        <List.Item as="li">
                            Part of multiple Request for Proposals(RFPs) which
                            were converted to projects eventually
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
                            Managing servicing tickets in Remedy with team and
                            providing regular SLA reports
                        </List.Item>
                        <List.Item as="li">
                            Involved in employee hiring processes
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default WorkInfosys;
