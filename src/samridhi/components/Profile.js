import React from "react";

import { Segment, Icon, List } from "semantic-ui-react";

import { segmentStyleLeftFirst } from "./styles/default";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeftFirst}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="user" size="large" /> Profile
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 15
                    }}
                >
                    <List.Item>
                        <List.Content style={{ paddingLeft: 10 }}>
                            <p>
                                I have 8+ years experience as IT professional
                                having hands-on experience. I am certified
                                Salesforce Administrator and Opentext WSM
                                Consultant.
                                <br />
                                <br />
                                My key responsibilities include:
                            </p>
                            <ul style={{ marginLeft: -25 }}>
                                <li style={{ marginBottom: 5 }}>
                                    Perform all tasks related to the day-to-day
                                    Salesforce administration.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Manage Salesforce users, monitor support
                                    requests and resolve.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Understand all aspects of Salesforce
                                    Configuration and technical/functional
                                    capabilities.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Gather business requirements for
                                    enhancements and translate into technical
                                    requirements
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Develop custom list views, templates,
                                    reports and dashboards to support the
                                    business.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Communicate future Salesforce releases and
                                    enhancements.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Recommend improvements to existing systems
                                    and processes.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Manage Profiles, Role Hierarchy, Permission
                                    Sets and Security Controls.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Create and manage Apps, Objects, Workflows,
                                    and Validation rules, Page Layouts, Record
                                    Types, formulas and Custom Report Types.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Perform data imports, exports, and updating
                                    and clean-up Organization data.
                                </li>
                            </ul>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default Profile;
