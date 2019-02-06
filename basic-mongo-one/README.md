## Exercises

### Do Mongo Restore

- `cd` into `pesto-day-19/Exercise/01`.

- Use `mongorestore` to restore the dump into your running `mongod`. A new database called `video` will be created.

- Pass all tests by implementing functions in `/src/index.js`.

### Questions

In the `movieDetails` collection, write an update command that will remove the "tomato.consensus" field for all documents matching the following criteria:

    - The number of imdb votes is less than 10,000
    - The year for the movie is between 2010 and 2013 inclusive
    - The tomato.consensus field is null

<!-- db.movieDetails.updateMany({"imdb.votes": { $lt: 10000}, year: { $in: [2010, 2011, 2012, 2013] }, "tomato.consensus": null }, { $unset: { "tomato.consensus": 1 } }, { multi: true })
{ "acknowledged" : true, "matchedCount" : 204, "modifiedCount" : 13 } -->
