# Social Network API

This is an API for a social network web application built with Express.js, MongoDB, and Mongoose.

## Walkthrough Video

<a href="https://drive.google.com/file/d/1B3CmxvTqh0fwQzaUBOHJvJItXpBVnSd8/view?usp=sharing">Walkthrough Video</a>

## Installation and Usage

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the server using `npm start`.
4. Access the API endpoints using a tool like Insomnia or Postman.

## API Endpoints

- Users:
  - GET /api/users
  - GET /api/users/:id
  - POST /api/users
  - PUT /api/users/:id
  - DELETE /api/users/:id
  - POST /api/users/:userId/friends/:friendId
  - DELETE /api/users/:userId/friends/:friendId

- Thoughts:
  - GET /api/thoughts
  - GET /api/thoughts/:id
  - POST /api/thoughts
  - PUT /api/thoughts/:id
  - DELETE /api/thoughts/:id
  - POST /api/thoughts/:thoughtId/reactions
  - DELETE /api/thoughts/:thoughtId/reactions/:reactionId

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
