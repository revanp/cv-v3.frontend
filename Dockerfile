FROM oven/bun:alpine as base

WORKDIR /app

FROM base as dependencies

COPY package.json ./

RUN bun install --production

FROM base as builder

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN bun install
RUN bun run build

FROM base as runner

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=dependencies /app/node_modules ./node_modules

EXPOSE 3000

CMD ["bun", "run", "start"]