import React, { Component } from 'react';
import NavigationCard from "../components/NavigationCard";

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>What do you want to do?</h1>
                <div className="row">
                    <NavigationCard title={"Onchain NFT Validation"} link={"/onchain"} buttonText={"Validate"} text={"Verify any NFT on the Hedera testnet or mainnet against HIP412 metadata standard."}/>
                    <NavigationCard title={"Metadata Validation"} link={"/metadata"} buttonText={"Validate"} text={"Verify your metadata against HIP412 metadata standard."}/>
                    <NavigationCard title={"Examples"} link={"/examples"} buttonText={"View"} text={"Look at a list of examples to learn how to use the application."}/>
                    <NavigationCard title={"FAQ"} link={"/faq"} buttonText={"Learn more"} text={"Learn more about the application and its purpose."}/>
                </div>
            </div>
        );
    }
}
