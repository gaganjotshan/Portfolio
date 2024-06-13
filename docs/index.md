# Security in Next-Gen Analytics (SNGA)
You are progressing on a component of the primary project, Security in Next Generation Analytics. It refelects the structure, connectivity and components of the metioned project that aims to devising a innovative approach for secure AI-based analyses that could fortify cross-organizational collaboration. This documentation is a quick introduction to the SAP Fiori Application that serves
as a bridge, facilitating interaction with cross company work flow API(s) and shared distributed ledgers.  

In the subcomponent of this project [Fiori-Kyma_tutorial](https://github.wdf.sap.corp/I586254/Documentations-SNGA/tree/main/Fiori-Kyma_tutorial), We walked through the process of deploying a simple application in the Kyma Environment while simultaneously creating a SAP Fiori Application from ground. This SAP Fiori Application consumed a personalized REST-API to execute some basic functions. It is highly recommended to refer the documentation to gain some familiarity on Kyma Runtime Environment and SAP Fiori Application, before proceeding with this documentation.

<!-- ---
The highlights of this documentation includes:

-  Front-End: SAP Fiori Application that provide an interactive plateform interface to comsume the APIs, facilitate some required funtionalities and perform analytics.

-  Back-End: Cross Company Work Flow APIs and distributed ledgers consumed by the Fiori application, that showcased the viability of enhancing transparency and traceability in industrial use case, while safeguarding data privacy. -->

---

## SNGA Overview
[Security for Next-Gen Analytics]() for cross-organization collaboration presents an approach for Privacy Preserved Analytics which works in three phases. Refer to the paper for more information.

| Phase                                       | Description                                                          | Key Elements/Processes   |
| ---                                         | ---                                                                  | ---                       |
| Data and Process Analytic Profile Management | It involves creating and deploying the Data and Process Analytic Profile in the Distributed Ledger. | 1. Defining each analytics’ required input, pseudo-code, and access control policy.<br>2. Each stakeholder has to agree for profile deployment. |
| Cryptographic Profile Management            | It involves creating and deploying cryptographic profiles in secure enclaves on a joint TEE platform.| 1. The cryptographic profile defines a context per data type or group.<br>2. Each stakeholder is responsible for generating and deploying profiles and protecting their encryption material.<br>3. Deployment is facilitated by remote attestation through the Cryptographic Profile Repository API over a secure channel.<br>4. Data are encrypted before being committed to the Transactions Distributed Ledger.|
| Data & Process Analytic Evaluation          | It involves evaluating Data and Process Analytics over shared encrypted data.| 1. The querier initiates a Data and Process analytic evaluation via the Data & Process Analytics API. <br>2. Required encrypted data is decrypted, and pseudo-code is interpreted.<br>3. The outcome of this evaluation is optionally encrypted with the querier public key and sent back to the querier. |

SAP Fiori Application aims to provide an interphase for end user to benifite over Privacy Preserving Analytics.

## Content Overview

1. [Introduction](introduction.md)
    - [Project Stack](introduction.md#project-stack)
    - [Architecture](introduction.md#architecture)
2. [User Guide](userGuide.md)
    - [Prerequisites](userGuide.md#prerequisites)
    - [Installations](userGuide.md#installations)
    - [Getting Started](userGuide.md#getting-started)	

    <!-- - Use Cases:
        - [REST-API](rest_api/useCaseAPI.md)
        - [Fiori-APP](fiori_app/useCaseApp.md) 
    [REST API](kymaDeployment.md#rest-api) -->

3. [Fiori Application](fiori_app/fioriApp.md)

   