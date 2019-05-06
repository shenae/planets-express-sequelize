# Planets API with Sequelize and Express!

_Introduction_

For this exercise you will be implementing a planet database and data layer for creating and querying different planets, as well as, sending json data to the browser.

### Setup
- Fork and clone this repo
- `cd` into the repo and run `createdb solar_system_db` in the terminal.
- Take a moment to glance over the provided files.  There is a `models.js` file (add the database name), a `resetDb` script, and scripts in `package.json`, feel free to add your own.
- Lastly, run `npm install`.

## The Model
To start, define a `Planet` model inside `models.js` with three columns:
- name (text)
- num_moons (integer)
- color (text)

**Don't forget to add `Planet` and `sequelize` to the exports at the bottom of your models file.**

### Planet API (Use this as a reference for what `your` completed API will function like)
```
BASE_URL: 'https://wdi-nyc-planets-api.herokuapp.com'

Endpoints: /planets and /planets/random

```
## Deliverables:
1. Touch a `seed.js` file, and use it to `bulkCreate` all the planets you got from 'https://wdi-nyc-planets-api.herokuapp.com/planets'
    - Make sure you sync your db with the data.
1. Once the model is correct, `touch server.js` file:
    - require express.
    - require morgan and body-parser.
    - have the app listen on port 3000.
    - use `res.send` to show 'Hello Friend' on the `/` path as a test response.
    - start your server with `npm start`
1. Add a `planetRouter` file. Make sure you `require` and `use` it in `server.js`!
1. Next, add a route that should return `all` planets, and a route that returns `one` planet with a `GET` request.
    - the first request should `findAll` planets.
    - the following request should `findOne` planet.
1. Now, add a post route to `post` a new planet.

### References
- [Express Lesson](https://git.generalassemb.ly/wdi-nyc-bananas/js-express-intro-lesson)
- [Express docs](https://expressjs.com/)
- [npm express](https://www.npmjs.com/package/express)
- [npm morgan](https://www.npmjs.com/package/morgan)
- [npm bodyparser](https://www.npmjs.com/package/body-parser)

##### Further Reading (for bonus/tomorrow)
- [Sequelize Associations](http://docs.sequelizejs.com/manual/tutorial/associations.html)


#### Bonus

1. Add a route with an endpoint: `/planet/random` to `GET` a random planet from your API and display it in the browser.
1. Delete a planet. The `DELETE` request should delete a planet of your choice.


#### Super(nova) Bonus

1. Create a model for stars with attributes name, size and life_cycle (i.e., supernova, white dwarf).
2. Create a bunch of stars using sequelize.
3. Write a `GET` request to return all the stars `you created`.
4. Use `eager loading` with sequelize (reference back to today's labs!).

<details>
    <summary>Where should this go?</summary>
    We recommend using a /planets/stars/:planet_id route. Or something of the sort ;).
</details>


#### Relax with some planet gifs!
![](https://media.giphy.com/media/l4FGJQvXJdKsBboha/giphy.gif)

![](https://media.giphy.com/media/l0He3o8pL9AebplFm/giphy.gif)

![](https://media.giphy.com/media/3o7buctjKD8g5r4544/giphy.gif)
