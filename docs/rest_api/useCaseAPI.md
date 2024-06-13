# REST API- Use Cases

## **Local Test Case**
**Test Case 1: Echo Method**    

To test the echo method of the REST API, use the following curl command:

```shell
curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello, World!"}' http://localhost:8080/echo
```
The anticipated response should look like this:

```json
{
  "message": "Hello, World!"
}
```

**Test Case 2: Readme Method**  

To test the readme method of the REST API, use the following curl command:

```shell

curl -X POST -H "Content-Type: multipart/form-data" -F "file=@example.txt" http://localhost:8080/readme
```

Make sure you have a file named example.txt in the same directory as the Flask application.

The anticipated response should be the contents of the file: 
```json
{
  "content": "Hello from the uploaded file!!"
}
```

## **KYMA Test Case**

**Test Case 1: Echo Method**  

To test the echo method of the REST API, use the following curl command:

```shell
curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello, World!"}' https://flask-api.c-45818be.kyma.ondemand.com/echo
```
The expected response will be:

```json
{
  "message": "Hello, World!"
}
```

**Test Case 2: Readme Method**  

To test the readme method of the REST API, use the following curl command:

```shell
curl -X POST -H "Content-Type: multipart/form-data" -F "file=@hello.txt" https://flask-api.c-45818be.kyma.ondemand.com/readme  
```
The expected response will be the content of the file.
```json
{
  "content": "Hello from the uploaded file!!"
}
```