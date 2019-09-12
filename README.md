# Create-react-app + Now serverless fns + MongoDB Atlas 

This is a starter consisting of :
- Create react-App CLI
- MongoDB Atlas
- Zeit Now serverless functions

React makes fetch requests to serverless fns in the `/api` folder; the serverless fns query the MongoDB store. 

To run local development:

```shell
$ now dev
```

⚠ Important: In local dev, use `http://localhost:3000/`. If a strange URL appears in your browser like `http://localhost:65253/`, open up :3000 and work with that port instead.

## Deploying this Example

Deploy the app with a single command:

```shell
$ now
```
