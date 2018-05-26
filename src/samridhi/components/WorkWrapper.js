import React from "react";

import { Segment, Icon, List } from "semantic-ui-react";

import WorkInfosys from "./WorkInfosys";
import WorkWipro from "./WorkWipro";
import WorkTechMahindra from "./WorkTechMahindra";

import { segmentStyleLeft } from "./styles/default";

class WorkWrapper extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="suitcase" size="large" /> Work Experience
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <WorkInfosys />
                    <WorkWipro />
                    <WorkTechMahindra />
                </List>
            </Segment>
        );
    }
}

export default WorkWrapper;
