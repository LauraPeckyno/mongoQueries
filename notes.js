// MongoDB queries

// 1.  $and and $or
///////////////////////////////

// routes data under sample_training
// routes using a 767 plane that are not nonstop
{$and:[{airplane: {$eq: 767}},{stops:{$ne:0}}]}

// shipwreck data under sample_geospacial
// wrecks that are visible or listed as always dry
{$or:[{feature_type: {$eq: "Wrecks - Visible"}},{watlev: {$eq: "always dry"}}]}


// 2. $not and $nor
///////////////////////////////

// Planets data under sample_guides
// planets not greater than 5th from sun nor less than 2nd from the sun
{  "$nor": [{ "orderFromSun": { "$gt": 5 } },{ "orderFromSun": { "$lt": 2 } }]}

// routes data under sample_training
// routes that dont use a CR2 plane
{ airplane: { $not: /CR2/ } }

// 3. $eq and $ne
////////////////////////////////

// routes data under sample_training
// routes that are not nonstop
{stops: {$ne: 0}}

// sales under sample_supplies
// orders in which a coupon was used
{couponUsed: {$eq: true}}

// 4. $gt and $lt
/////////////////////////////////

// embedded_movies under sample_mflix
// movies with a runtime less than 60 min
{runtime: {$lt: 60}}

// listingsAndReviews under sample_airbnb
// listings with more than 50 reviews
{number_of_reviews: {$gt: 50}}

// 5. $in and $nin
//////////////////////////////////

// data under sample_weatherdata
// weather data with call letters of either GYYA, UHRY, or GBVV
{ callLetters: { $in: [ "GYYA", "UHRY", "GBVV" ] } }

//movies under sample_mflix
// movies that aren't rated G, TV-G, or Passed
{rated: {$nin: ["TV-G", "PASSED", "G"]}}





