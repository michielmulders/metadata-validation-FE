import Accordion from 'react-bootstrap/Accordion';

import MetadataList from "./MetadataList";
import ProblemList from "./ProblemList";

const ValidationResults = ({validationErrors}) => {
    return (
        <div>
        {validationErrors.visible && !validationErrors.success && !!!validationErrors.errorMsg &&
            <Accordion defaultActiveKey="0" flush style={{ backgroundColor: 'pink' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>❌ Number of errors: {validationErrors.errors.length}</strong></Accordion.Header>
                    <Accordion.Body>
                        <ProblemList problems={validationErrors.errors} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>⚠️ Number of warnings: {validationErrors.warnings.length}</strong></Accordion.Header>
                    <Accordion.Body>
                        <ProblemList problems={validationErrors.warnings} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        }
        {validationErrors.visible && validationErrors.success && !!!validationErrors.errorMsg &&
            <MetadataList metadata={validationErrors.metadata} />
        }
        {validationErrors.visible && !!validationErrors.errorMsg &&
            <p><strong>Error while validating your NFT:</strong> {validationErrors.errorMsg}</p>
        }
        </div>
    );
}

export default ValidationResults;