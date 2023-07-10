import mongoose from "mongoose";
import { app } from "./app";
import { connectDB } from "./src/config/db";
import { port } from "./src/config/port";
import { natsWrapper } from './nats-wrapper';
import { CartCreatedListener } from './src/events/listener/cart-created-listener';
import { CartDeletedListener } from './src/events/listener/cart-deleted-listener';
import { ProductCreatedListener } from './src/events/listener/product-created-listener';
import { ProductDeletedListener } from './src/events/listener/product-deleted-listener';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  //nats-setup 
  const a = Math.floor(Math.random() * 1000000) + 1
  console.log(a.toString());

  try {
    await natsWrapper.connect(
      "ecommerce",
      a.toString(),
      "http://nats-srv:4222"
    );
 
    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new ProductDeletedListener(natsWrapper.client).listen();
    new ProductDeletedListener(natsWrapper.client).listen();
    new ProductDeletedListener(natsWrapper.client).listen();
    new ProductDeletedListener(natsWrapper.client).listen();

    new ProductCreatedListener(natsWrapper.client).listen();
    new ProductCreatedListener(natsWrapper.client).listen();
    new ProductCreatedListener(natsWrapper.client).listen();
    new ProductCreatedListener(natsWrapper.client).listen();


    new CartCreatedListener(natsWrapper.client).listen()
    new CartCreatedListener(natsWrapper.client).listen()
    new CartCreatedListener(natsWrapper.client).listen()
    new CartCreatedListener(natsWrapper.client).listen()

    new CartDeletedListener(natsWrapper.client).listen()
    new CartDeletedListener(natsWrapper.client).listen()
    new CartDeletedListener(natsWrapper.client).listen()
    new CartDeletedListener(natsWrapper.client).listen()

    connectDB();

  } catch (err) {
    console.error(err);
  }

  app.listen(port, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
}

start()