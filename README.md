# Hono With Bun Running On Cloudflare

```bash
bun run dev
bun run deploy
```

## Cloudflare DB

```bash
bun run wrangler d1 create bun-hono-cloudflare-d1
bun run wrangler d1 execute bun-hono-cloudflare-d1 --file=./schema.sql
bun run wrangler d1 execute bun-hono-cloudflare-d1 --local --file=./schema.sql
bun run wrangler d1 execute bun-hono-cloudflare-d1 --local --command="select * from customers"
```

## Code History

The code in this repository is based on the following:

- https://youtu.be/yPrQ7u3gWqk?si=d3mB5iitxXd6VB3R


## Creation History

```bash
bun create hono bun-hono-cloudfare # select cloudflare workers
cd bun-hono-cloudfare/
```