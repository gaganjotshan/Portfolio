# SAP-Fiori APP

SAP Fiori is the design system for all SAP products, enabling you to create business applications with a great consumer-grade user experience. You can use various UI technologies such as the SAPUI5 framework, UI5 Web Components, or the mobile iOS and Android SDKs to build SAP Fiori apps.
This Fiori application is designed to comply with the Security in Next-Gen Analytics project requirements.


## Introduction
Some of the main tasks performed by SAP Fiori application:

| Tasks         | Associated Controller | Parameters                    | Expected Output                                           | Description                                                                                                   |
|---------------|-----------------|-------------------------------|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Authentication   | App       | client_credential                          | Token  |  The 'getToken' function is used to obtain an authentication token using the OAuth 2.0 client credentials grant type, which allows the application to authenticate itself and gain access to protected resources.          |
| Retrieve Data and Display    | App       | Token                         | Reponse from AJAX request (stored in a Model) | ' getScenarioData' and 'getTaskData', fetch data about scenarios and their tasks using AJAX requests. The first function retrieves scenario summaries and IDs, and then invokes the second function to fetch and process task details. The second function makes separate requests for each scenario's tasks, extracts task IDs and context values, and updates the application's data model for display.       |
| File upload   | Transactions       | File                          | File contains set of transactions. On upload, the file's transactions are registered in Transactional Distributed Ledger. | Accepts a file as an input parameter, registers the transactions, and returns the Transaction ID.          |
| File upload   | Analytics       | File                          | File contains set of transactions. On upload, the file the data is send to an API (currently a remote API under work) | Takes a file as input and conducts data analytics upon request through the API. The outcomes obtained from the API are then displayed in the text area.   |
| Delete   | MasterList       | PO IDs                          | It deletes the selected PO Ids from the checkbox and delete them from the transaction Ledger         |By selecting checkbox for POs (Purchase Orders) in a table. The 'onSelectAllPOs' function manages the selection status of checkboxes and stores selected PO IDs. The onDelete function initiates PO deletion using AJAX requests. It retrieves an access token, if not available, and sends deletion requests for selected POs. The removeDeletedScenario function removes deleted scenarios from the table's data model. The code enables efficient PO deletion and UI updates. |



## Conclusion   

This application provides a user-friendly interface for seamless interaction with preexisting APIs and shared distributed ledgers. By crafting a robust and secure authentication system, enabling authorized access to critical functionalities the application's design prioritizes both efficient data handling and stringent security measures, offering users a streamlined and secure experience when interacting with the integrated APIs and distributed ledger. 