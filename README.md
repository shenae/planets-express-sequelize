# Planet Sequelize

_Introduction_

For this exercise you will be implementing a `Planet` database and data layer for creating and querying different planets.

### Setup
- Fork and clone this repo
- `cd` into the repo and run `createdb planets_sequelize_db`
- Take a moment to glance over the provided files.  There is a skeleton `models.js` file, a `resetDb` script, and a few scripts in `package.json`
- Lastly, run `npm install`

## The Model

To start, define a `Planet` model inside `models.js` with three columns:
- name
- num_moons
- color

Pick sensible types for each of these columns.  Don't forget to add `Planet` to the exports at the bottom of the file.