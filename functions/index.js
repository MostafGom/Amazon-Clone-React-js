const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("SECRET KEY FROM STRIPE ACCOUNT");

// API

const app = express();
// App config
app.use(cors({ origin: true }));
app.use(express.json())

// Middlware
app.get('/', (request, response) => response.status(200).send("hello"))

app.post('/payment/create', async (request, response) => {
  const total = request.query.total

  console.log('payment received for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  })

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
})
// API routes

// Listen
exports.api = functions.https.onRequest(app)



// http://localhost:5001/shop-clone-3a028/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


