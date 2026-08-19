FROM node:22-alpine as builder

RUN npm install -g pnpm
WORKDIR /usr/src/app
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:22-alpine as base
RUN npm install -g pnpm
WORKDIR /usr/src/app
COPY pnpm-lock.yaml package.json ./

FROM base as dev
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]

FROM node:22-alpine as prod
RUN npm install -g pnpm
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
