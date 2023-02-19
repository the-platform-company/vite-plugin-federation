#!/usr/bin/env bash

pnpm build
cd packages/examples/react-vite
pnpm build
pnpm serve
