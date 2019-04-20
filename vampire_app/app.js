// 1. Require your node modules
const mongoose = require('mongoose');
const port = 3000;



// 2. Require your model (and possibly your extra data source);
const vampire = require('./models/vampire');

// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampire';

// 4. Open your mongoose connection
mongoose.connect(connectionString, {
useNewUrlParser: true,
useCreateIndex: true

});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
const vampireData = require('./populateVampires');
vampire.insertMany(vampireData,(err, vampireData) => {
    console.log("added vampire data")
    // mongoose.connection.close();
  });
// ### Add some new vampire data
vampire.create({
    name: 'Vincent Valentine',
    hair_color: 'black',
    eye_color: 'brown',
    dob: 1777, 
    loves: ['Lucrecia'],
    location: 'Shinra Mansion',
    gender: 'm',
    victims: 7777
}, (err, createdVamp) => {
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(createdVamp);
    // }
});
vampire.create({
    name: 'Lucrecia Valentine',
    hair_color: 'black',
    eye_color: 'blue',
    dob: 1767, 
    loves: ['Vincent'],
    location: 'Shinra Falls',
    gender: 'f',
    victims: 7
}, (err, createdVamp) => {
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(createdVamp);
    // }
});
vampire.create({
    name: 'Valerie',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: 1888, 
    loves: ['blood'],
    location: 'Transylvania',
    gender: 'f',
    victims: 123
}, (err, createdVamp) => {
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(createdVamp);
    // }
});
vampire.create({
    name: 'Seline',
    hair_color: 'black',
    eye_color: 'blue',
    dob: 1968, 
    loves: ['his nephews'],
    location: 'Transylvania',
    gender: 'm',
    victims: 321
}, (err, createdVamp) => {
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(createdVamp);
    // }
});

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

vampire.find({gender: 'f'}, (err, foundVamp) => {
        if(err){
            console.log(err);
        } else {
            console.log(foundVamp);
        }

    });
// find all vamps with over 500 victims
// vampire.find({victims: {$gt: '500'}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// });
// find all with fewer or equal to 150 victims
// vampire.find({victims: {$lte: '150'}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// find all that have a victim count is not equal to 210234
// vampire.find({victims: {$ne: '210234'}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// find all that have greater than 150 AND fewer than 500 victims
// vampire.find({victims: {$gt: '150', $lt: '500'}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 


/////////////////////////////////////////////////
// ### Select by exists or does not exist
//select those with a title
// vampire.find({title: {$exists: true}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// select those without a victims property
// vampire.find({victims: {$exists: false}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// select those with a title and no victims
// vampire.find({victims: {$exists: false}, title: {$exists: true}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// select those with victims AND the victims they have are greater than 1000
// vampire.find({victims: {$exists: true}, victims: {$gt: 1000}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

/////////////////////////////////////////////////
// ### Select with OR// select those that are from New York, New York, US or New Orleans, Louisiana, US
// vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// select those that love brooding or being tragic
// vampire.find({$or: [{loves: 'brooding'}, {loves: 'being tragic'}]}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// select those that have more than 1000 victims or love marshmallows
// vampire.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// select those that have red hair or green eyes
// vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
