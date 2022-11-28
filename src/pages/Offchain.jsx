import React, { Component } from 'react';
import MetadataFormValidation from "../components/MetadataForm";

export default class Offchain extends Component {
    render() {
        return (
            <div className="container">
                <h1>Add your metadata for verification</h1>
                <p>Enter your NFT metadata to verify its validity against the <a href="https://gist.github.com/michielmulders/571c496789ede04c9074817cee834246">HIP412 metadata standard</a>.</p>
                <MetadataFormValidation />
            </div>
        );
    }
}
