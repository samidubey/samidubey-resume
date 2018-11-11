import React from "react";

import {Rating} from "semantic-ui-react";

class PersonalLanguage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (<div>
            <h2 style={{
                    margin: 0,
                    padding: 0,
                    fontSize: 22
                }}>
                Languages
            </h2>
            <h3 style={{
                    margin: 3,
                    padding: 0,
                    fontWeight: "normal"
                }}>
                English{" "}
                <Rating icon="star" defaultRating={3} maxRating={4} disabled="true" />
            </h3>
            <h3 style={{
                    margin: 3,
                    padding: 0,
                    fontWeight: "normal"
                }}>
                Hindi{" "}
                <Rating icon="star" defaultRating={4} maxRating={4} disabled="true" />
            </h3>
        </div>);
    }
}

export default PersonalLanguage;
