import React from "react";

import { List } from "semantic-ui-react";

class WorkTechMahindra extends React.Component {
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
                        Software Engineer, Tech Mahindra - Chennai, India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Jul 2008 - Dec 2012 (4 years 6 months)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            As a Technical Lead, I managed an 8 member team
                            working on layout and content changes for Mars.com
                        </List.Item>
                        <List.Item as="li">
                            Developing templates/html/css/javascript for the
                            layout changes using Reddot CMS(now Opentext Website
                            Content Management)
                        </List.Item>
                        <List.Item as="li">
                            Facilitated planning, allocation and monitoring of
                            tasks among team members
                        </List.Item>
                        <List.Item as="li">
                            Creation and configuration of the tool for
                            Publication Packages for websites.
                        </List.Item>
                        <List.Item as="li">
                            Setting up and maintaining Development, Staging and
                            Production environments for Reddot CMS
                        </List.Item>
                        <List.Item as="li">
                            Created workflows to incorporate content change
                            approval in the website.
                        </List.Item>
                        <List.Item as="li">
                            Unit testing and Integration testing for website.
                        </List.Item>
                        <List.Item as="li">
                            Organized and conducted training on Opentext WSM for
                            the team members
                        </List.Item>
                        <List.Item as="li">
                            Documented Technical, Design and User guide for
                            developing, supporting and maintaing the website
                        </List.Item>
                        <List.Item as="li">
                            Collaborating with Onsite Coordinator with respect
                            to project status and goal alignment
                        </List.Item>
                        <List.Item as="li">
                            Coordinate the issues about Project requirements
                            (Software, Hardware, Resources) to Project Manager /
                            Onsite Coordinator
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default WorkTechMahindra;
