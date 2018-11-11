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
            Junior Salesforce Administrator, ResearchGate - Berlin, Germany
          </h2>
          <h3 style={{ margin: 0, padding: 0 }}>
            May 2018 - till today
          </h3>
          <List as="ul" style={{ marginLeft: 15 }}>
            <List.Item as="li">
              Salesforce Administration - User Management, Managing Permissions, Profiles, Roles, etc.
            </List.Item>
            <List.Item as="li">
              Automating and managing business processes via Process Builder, Worflows and Flows
            </List.Item>
            <List.Item as="li">
              Supporting Sales team with their daily issues
            </List.Item>
            <List.Item as="li">
              Adding validation rules to improve data quality and incorrectness
            </List.Item>
            <List.Item as="li">
              Constant communication with stakeholders including Sales, Finance, Legal and Marketing teams.
            </List.Item>
            <List.Item as="li">
              Conducting and felicitating trainings for Sales team
            </List.Item>
            <List.Item as="li">
              Generate reports and dashboards for insights to the Sales
            </List.Item>
          </List>
        </List.Content>
      </List.Item>
    );
  }
}

export default WorkInfosys;
