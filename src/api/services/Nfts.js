import client from "../client";

/**
 * GET validation report for on-chain NFT ID
 * 
 * @param {string} tokenId 
 * @param {string} serial 
 * @param {string} [network = "mainnet"]
 * @param {string} [version = "1.0.0"]
 * @returns {Promise<Object>} - validation report
 */
const validate = (tokenId, serial, network = "mainnet", version = "1.0.0") => {
    return client.get(`/nfts/${tokenId}/${serial}?network=${network}&version=${version}`)
}

/**
 * POST metadata to receive validation report for user-submitted metadata
 * 
 * @param {string} metadata - Stringified metadata
 * @param {string} [network = "mainnet"]
 * @param {string} [version = "1.0.0"] 
 * @returns {Promise<Object>} - validation report
 */
const validateByMetadata = (metadata, version = "1.0.0") => {
    return client.post(`/nfts/metadata?version=${version}`, {
        metadata
    });
}

const NFTService = {
    // returns validation report for NFT ID
    validate,
    // returns validation report for user-submitted metadata
    validateByMetadata
}

export default NFTService;