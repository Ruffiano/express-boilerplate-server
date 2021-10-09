# A kickstarter for nodejs restfull API

A boilerplate/kickstarter project for quickly building RESTful APIs using Node.js, Express, Mongoose, NginX and Docker.

## Overview
When I started this project, my primary focus was on simplicity and ease of use. You can downlaod this project and build your own project top of my source base.


Express server development, by runing cmd, you will get a production-ready Node.js app installed and fully configured on your machine. The app comes with many built-in features, such as authentication using JWT, request validation, unit and integration tests, nginx, docker support, API documentation, etc. For more details click on content.
#

## Manual Installation
If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone https://github.com/Ruffiano/express-boilerplate-server.git
```

### :wrench: Installation
<br/>

| Install | 
| :------: | 
| `npm install`|

<br/>

### :electric_plug: Usage (from source)

Run main server manulaly:

| Run Code | Test All Code | Test by Name|
| :------: | :------: | :------: |
| `npm run start` | `npm run test` | `npm run test -- "testName" ` |

<br/>

Run worker manulaly:

| Run Code | Test All Code | Test by Name|
| :------: | :------: | :------: |
| `npm run worker` | `npm run woker` | `npm run test -- "testName" ` |
<br/>

### Docker:
```bash
docker-compose up
docker-compose down
```
<br/>

## Project Structure
```
src\
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--startup\        # Run all project dependet source
 |--test\           # Unit tests and integration tests
 |--services\       # Microservice app which is runnig with different process
 |--utils\          # Utility classes and functions
 |--index.js        # App entry point
```
<br/>

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:5000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

<br/>

### API Endpoints

List of available routes:

**Routes**:\
```
/api/v1/categories
/api/v1/customers
/api/v1/courses
/api/v1/enrollments
/api/v1/users
/api/v1/auth
```

<br/>

## Other Projects by Topic:
1. [algorithms-and-data-structures](https://github.com/Ruffiano/algorithms-and-data-structures) - Data sturcture and algorithm.
2. loadbalancer.worker.server - Load Balancing and workers NodeJs apps using Nginx.
3. [crash-reporter-server](https://github.com/Ruffiano/crash-reporter-server) - Collects any crashes (error, unhandled exceptiont, [log, info, warning]) by any application.

<br/>

## Contributing
Contributions are more than welcome! Please check out the [contributing guide](CONTRIBUTING.md).

Coding style guide
ESLint to ensure a consistent code style in the project, based on Airbnb's JS style guide. https://github.com/airbnb/javascript

## License

[MIT](LICENSE)