# REST API

A REST API built with the Flask framework refers to an application programming interface (API) developed and implemented using the lightweight Flask web framework, adhering to the principles of Representational State Transfer (REST). Essentially, this web service, constructed via Flask, facilitates data exchange over HTTP in compliance with REST ideologies and conventions. This type of API can manage and utilize different operations such as "GET", "POST", "PUT", "DELETE", etc., on resources. This ultimately provides a communication interface between client and server in web application contexts.

<!-- ## Introduction:

| Method   | Input Parameters | Expected Output              | Description                                                                 |
|----------|-----------------|------------------------------|-----------------------------------------------------------------------------| -->

 
## [Requirements](../userGuide.md#prerequisites)  

Make sure you have all the required dependencies.


## Installations 
Local 
To install and run the Rest API in a Docker Container, follow the instructions:

1. Clone the repository:  
```shell
git clone git@github.wdf.sap.corp:I586254/Next_Gen_Analytics.git
cd rest_api/01-Deployment/
```

2. Use the [Dockerfile](https://github.wdf.sap.corp/I586254/Next_Gen_Analytics/blob/main/rest_api/01-Deployment/dockerfile) to create your API's Docker image for the REST-API.  
Make sure your current directory is the same as where the Dockerfile is located.
```shell
docker build -t myapi .
docker images
```

## Deployment
<!-- ### 1. Local Deployment 

Test your image locally by running the container with:
```shell
docker run -p 9000:9000 myapi
```
This will expose the API on local port of your host machine. -->

### Kyma Deployment
Refer to [API Deployment](https://github.wdf.sap.corp/I586254/Documentations-SNGA/blob/main/Fiori-Kyma_tutorial/docs/kymaDeployment.md) for this task.

Refer to API yml file in the tutorials project. Either follow the steps from the tutotal and fill the forms for the deployment or  you can refer to yml file, however you will need to make some adjustments according to the requirements. for instance, adjust NameSpace, app name, ports etc.

