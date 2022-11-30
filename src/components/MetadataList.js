const MetadataList = ({metadata}) => {
    return (
      <div>
        <strong>JSON metadata validated against HIP412 standard</strong>
        <br/>
        <p><strong>Name:</strong> {metadata.name}</p>
        {metadata.creator && <p><strong>Creator:</strong> {metadata.creator}</p>}
        {metadata.creatorDID && <p><strong>Creator DID:</strong> {metadata.creatorDID}</p>}
        {metadata.description && <p><strong>Description:</strong> {metadata.description}</p>}
        <p><strong>Image:</strong> {metadata.image}</p>
        {metadata.checksum && <p><strong>Checksum for image:</strong> {metadata.checksum}</p>}
        <p><strong>Type:</strong> {metadata.type}</p>
        {metadata.format && <p><strong>Format:</strong> {metadata.format}</p>}
        {metadata.properties && <p><strong>Properties:</strong> {JSON.stringify(metadata.properties)}</p>}
        {metadata.files && <p><strong>Files:</strong> {JSON.stringify(metadata.files)}</p>}
        {metadata.attributes && <p><strong>Attributes:</strong> {JSON.stringify(metadata.attributes)}</p>}
        {metadata.localization && <p><strong>Localization:</strong> {JSON.stringify(metadata.localization)}</p>}
  
      </div>
     
    );
}

export default MetadataList;