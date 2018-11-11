import React from "react";
import Head from "next/head";

import { Grid } from "semantic-ui-react";

import Header from "../components/Header";
import Profile from "../components/Profile";
import WorkWrapper from "../components/WorkWrapper";
import EducationWrapper from "../components/EducationWrapper";
import PersonalWrapper from "../components/PersonalWrapper";

import { gridStyleLeft } from "../styles/default";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Head>
          <title>Initial</title>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/overrides.css"
          />
        </Head>
        <Grid celled style={{ width: "960px" }}>
          <Grid.Row>
            <Grid.Column style={gridStyleLeft}>
              <Header />

              <Profile />

              <WorkWrapper />

              <EducationWrapper />

              <PersonalWrapper />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Index;
