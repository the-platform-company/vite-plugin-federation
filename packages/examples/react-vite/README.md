# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `host` (react based) depends on a component exposed by `remote` app (react based).

## Running

First, run `pnpm install`, then `pnpm run build` and `pnpm run serve`. This will build and serve both `host` and `remote` on ports 5000, 5001 respectively.

- HOST: [localhost:3000](http://localhost:3000/)
- REMOTE: [localhost:3001](http://localhost:3001/)

`CTRL + C` can only stop the host server. You can run `pnpm stop` to stop all services.
