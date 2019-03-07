# Planets API with Sequelize and Express!

_Introduction_

For this exercise you will be implementing a planet database and data layer for creating and querying different planets, as well as, sending json data to the browser.

### Setup
- Fork and clone this repo
- `cd` into the repo and run `createdb solar_system_db`
- Take a moment to glance over the provided files.  There is a skeleton `models.js` file, a `resetDb` script, and a few scripts in `package.json`
- Lastly, run `npm install`

## The Model

To start, define a `Planet` model inside `models.js` with three columns:
- name
- num_moons
- color

**Don't forget to add `Planet` to the exports at the bottom of the file.**

```
BASE_URL: 'https://wdi-nyc-planets-api.herokuapp.com'

Endpoints: `/planets` and `/planets/random`

```

In `scratch.js`:
1. Test your models, by creating a planet to make sure everything is functioning the way you want?
1. Did you import the planet model!
1. Once the model is correct, `touch server.js` file:
    - require express.
    - have the app listen on port 3000.
    - use `res.send` to show 'Hello Friend' on the `/` path.
    - `npm start`
1. Next, make planets routes that should return the planets with a `GET` request.
    - the first request should `findAll` planets.
    - the following request should `findOne` planet.
1. Now, use `POST` and `DELETE` to post and delete a planet.
    - the `POST` request should use `create` in sequelize.
    - the `DELETE` request should use `destroy` in sequelize.


#### Bonus

1. Use the random endpoint (`/planet/random`) to `GET`
a random planet from the API.


#### Super(nova) Bonus

1. Create a model for a star with attributes name and size (and others if you would like)
2. Create a star
3. Write a `GET` request to return all the stars you created.

Use sequelize associations to relate planets and stars (the subject of our lesson tomorrow).

##### Relax with some planet gifs!
![](https://media.giphy.com/media/l4FGJQvXJdKsBboha/giphy.gif)

![](https://media.giphy.com/media/l0He3o8pL9AebplFm/giphy.gif)

![](https://media.giphy.com/media/3o7buctjKD8g5r4544/giphy.gif)
