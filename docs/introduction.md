# Introduction

This project involves the development of an SAP Fiori application that interacts with a REST API(s) and distributed ledgers. The SAP Fiori Application intends to serve as an interface designed for end-users to facilitate Privacy Preserving Analytics. This advanced implementation aims to simplify the process of data management and analysis in line with securing user privacy.

---
The subsequent table provides a comprehensive schema of the core components within the application. It explains the unique functionalities associated with each profile, highlights the specific invocation methods utilized, and describes in detail the complex processes underlying these operations.

| Profile Category | Associated Functionality | Invocation Method | Detailed Functionality Description |
| --- | --- | --- | ---|
| Data & Process Analytic Evaluation | Transactions | Data & Process Analytics API | This functionality allows the data owner to persist any transactions, along with the associated encrypted data, to the Transactions Distributed Ledger. Via the Data & Process Analytics API, a querier can request the evaluation of agreed Data and process analytics stored in the Data & Process Analytics Distributed Ledger. The required data is then extracted from the Transactions Distributed Ledger. |
| Data & Process Analytic Profile    | Analytics | --- | The Data & Process Analytics Distributed Ledger acts as a distributed and immutable repository for all agreed upon Data and Process Analytic Profiles. |
| Cryptographic Profile | Key Management | Cryptographic Profile API | All cryptographic profiles are embedded within the Cryptographic Profile Enclaves and deployed within a joint Trusted Execution Environment. The Cryptographic Profile Repository API allows the data owner to deploy those enclaves securely. |

**Note:** The Key Management component is currently under development and will be incorporated into the application in future.

## Project Stack
The technological backbone of this project involves the use of SAP BTP Cockpit, Kyma Environment, Cloud-Based TEE, and SAP Shared Ledger.

1. **Kyma Environment:**  
   Kyma is an open-source project designed natively on Kubernetes. It provides the flexibility to connect and extend APIs, serverless functions, microservices, and even legacy monolithic applications.

2. **Cloud-based TEE:**   
   This is a technology that provides a secure area within a main processor. It ensures coded data that is loaded has guaranteed protection, maintaining confidentiality and integrity.

3. **SAP Shared Ledger:**   
   This is an SAP technology that enables the implementation of blockchain-like structures for secure and verifiable data sharing across multiple parties.


## Architecture
The highligted region reflects the interactions with in this project.

<div style="text-align:center;">
    <figure>
        <img src="../Images/SNGA.png" alt="Architecture" width="950px">
        <figcaption>Fig: Architecture</figcaption>
    </figure>
</div>


 

