import { Hono } from "hono";

import { customers } from "./db";

type BindingsT = {
  DB: D1Database;
  MY_VARIABLE: string;
  SECRET: string;
};

const app = new Hono<{ Bindings: BindingsT }>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/secret", (c) => {
  if (!c.env.SECRET) return c.json({});
  return c.json(c.env.SECRET);
});

app.get("/customers", (c) => {
  console.log({ MY_VARIABLE: c.env.MY_VARIABLE });
  return c.json(customers);
});

app.get("/customers/:id", (c) => {
  const id = c.req.param("id");
  const customer = customers.find((c) => c.id.toString() === id);
  if (!customer) return c.json({});
  return c.json(customer);
});

export default app;
