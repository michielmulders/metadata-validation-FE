import React, { Component } from 'react';
import NFTFormValidation from '../components/NFTForm';

export default class Onchain extends Component {
    render() {
        return (
            <div className="container">
                <h1>Onchain NFT Metadata Validation</h1>
                <p>Enter your NFT ID consisting of a token ID and serial number of the specific NFT you want to validate against the <a href="https://gist.github.com/michielmulders/571c496789ede04c9074817cee834246">HIP412 metadata standard</a>. You can verify existing NFTs on both mainnet and testnet.</p>
                <NFTFormValidation />
            </div>
        );
    }
}
