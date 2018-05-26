import React from "react";

import { Grid } from "semantic-ui-react";

import Header from "./samridhi/components/Header";
import Profile from "./samridhi/components/Profile";
import WorkWrapper from "./samridhi/components/WorkWrapper";
import EducationWrapper from "./samridhi/components/EducationWrapper";
import PersonalWrapper from "./samridhi/components/PersonalWrapper";

import { gridStyleLeft } from "./samridhi/components/styles/default";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
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
        );
    }
}

export default App;
