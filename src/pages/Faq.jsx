import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

export default class Faq extends Component {
    render() {
        return (
            <div className="container">
                <h1>Frequently Asked Questions</h1>
                <br/>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>What's the purpose of this tool?</strong></Accordion.Header>
                        <Accordion.Body>
                        We offer two different options for validating metadata against the <a href="https://hips.hedera.com/hip/hip-412">HIP412 v1.0.0 metadata standard</a>. In particular, the metadata is validated against this <a href="https://github.com/hashgraph/hedera-improvement-proposal/blob/main/HIP/hip-412.md#default-schema-collectibe-hedera-nfts-format-hip412100">JSON schema</a> but also implements a ton of custom rules to adhere to the standard.
                        <br/><br/>
                        The first option is <Link to="/onchain">"NFT validation"</Link> which validates on-chain NFTs' metadata against the HIP412 standard. This tool will look up the NFT information via a mirror node and then request the specified metadata. This metadata will then be verified for validity. This tool is useful for NFT owners who want to verify if an NFT adheres to the HIP412 metadata standard. 
                        <br/><br/>
                        The second option is <Link to="/metadata">"Metadata validation"</Link> which validates a user-submitted JSON against the HIP412 standard. This tool is useful for NFT creators who first want to verify if their metadata adheres to the HIP412 metadata standard.
                        <br/><br/>
                        The tool will output a list of problems that you need to fix. Each problem contains a path property which tells you where the problem is located. If the path says "instance", it means the problem is located on the root level of the JSON object. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>Why would I use the HIP412 metadata standard?</strong></Accordion.Header>
                        <Accordion.Body>
                        The HIP412 metadata standard has been developed with the Hedera NFT ecosystem in order to provide a common standard for all NFT-related tooling and projects.
                        <br/><br/>
                        When you adopt this standard, you get the benefit that NFT tooling like marketplaces can fetch and interpret your NFT's metadata. By having a common "language", it's much easier to develop an ecosystem of connected tools that can easily work together.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><strong>Can I use the metadata validator in my code?</strong></Accordion.Header>
                        <Accordion.Body>
                        Yes, you can! We have developed an <a href="https://www.npmjs.com/package/@michielmulders/hip412-validator">NPM package</a> for the JavaScript ecosystem that allows developers to use the validation logic locally or in their project.
                        <br/><br/>
                        The NPM package even allows you to add <a href="https://github.com/michielmulders/hip412-validator#add-custom-schema-versions">custom schemas</a> to verify your metadata.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}
