import { Hono } from "hono";
import { rawCssString } from "hono/css";

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

app.get("/customers", async (c) => {
  const query = await c.env.DB.prepare("select * from customers").all();
  const customers = query.results;
  return c.json(customers);
});

app.get("/customers/:id", async (c) => {
  const id = c.req.param("id");
  const query = await c.env.DB.prepare("select * from customers where id=?")
    .bind(id)
    .all();
  const customer = query.results;
  return c.json(customer);
});

export default app;
