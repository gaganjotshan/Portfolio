# User Guide

To expedite the development of the SAP Fiori application, we use the [Yeomen generator](https://github.com/mobui/generator-fiori). However, If you have a subscription to SAP Business Application Studio, we recommend you to utilise it, click here, [Create an SAP Fiori App Using SAP Business Application Studio](https://developers.sap.com/tutorials/appstudio-fioriapps-create.html) for a tutorial to navigate on the plateform. There exist several alternative approaches as well for generating a Fiori application. One prevalent approach involves [Fiori Develepment in VSCode with SAP Fiori Tools ](https://blogs.sap.com/2022/10/31/fiori-development-with-vscode-and-nodejs/). 
It's important to note that while the methods for creating a Fiori template may vary, the core process remains consistent. 

## Documentation Order

For this project, this layout also indicates the step-by-step instructions that are recommended to be followed. 

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

## Prerequisites

1. **Git**   
Install [Git SCM](https://git-scm.com/) to checkout the repository.
```
sudo apt install git
```
2. **Docker**  
 As the application is fully dockerized, it is essential to have Docker installed on your system. You can refer to the [Official Docker installation instructions](https://docs.docker.com/get-docker/) or install Docker for Linux by using the following command:
```shell
sudo apt install docker.io
```
If you prefer to manage your own Docker images, which is suggested, you can use your own Docker registry. This allows you to push and pull Docker images as needed. In this instance, we used [Docker Hub](https://hub.docker.com/).

3. **SAP BTP account**   
The application(s) are set up to launch within the Kyma Runtime Environment. You can register for a trial via the [BTP account](https://account.hana.ondemand.com/). However, the deployment of the application is not restricted to Kyma. It can also be deployed to [Minikube](https://minikube.sigs.k8s.io/docs/start/) or any other Kubernetes environment.


## Installations

**Step 1: Install Node.js**  
1. Launch your terminal.  
2. Execute the following command to install Node.js:
   ```
   sudo apt update
   sudo apt install npm
   ``` 

**Step 2: Installing the UI5 CLI**  
```
# Global installation to have the command available
npm install --global @ui5/cli

# Additional local install in your project
npm install --save-dev @ui5/cli

# Verify installation
ui5 --help
```



## Getting Started

**Step 1:  Clone the repository**  

```shell
git clone https://github.wdf.sap.corp/I586254/Next_Gen_Analytics.git
```

**Step 2: Refer: [Getting Started](https://sap.github.io/ui5-tooling/stable/pages/GettingStarted/) for more details.**

**Step 3: To run the application locally**
```
cd app/
node proxy.js
```
Note!
If you are running the application on SAP BTP Application Studio, make sure to run the proxy.js locally or on any other server than that of BTP application.

```
npm run start
```

To access the API endpoints from your local device, make sure to run the proxy first.

<div style="text-align:center;">
    <figure>
        <img src="../Images/ui5Serve.png" alt="" width="950px">
        <figcaption>Fig: app</figcaption>
    </figure>
</div>

On clicking the index.html file, you will be directed to the Home Page (Main view).

<div style="text-align:center;">
    <figure>
        <img src="../Images/homePage.png" alt="" width="950px">
        <figcaption>Fig: Main View</figcaption>
    </figure>
</div>

