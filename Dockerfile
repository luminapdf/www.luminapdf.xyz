FROM oven/bun AS base

ARG PUBLIC_APP_DOMAIN
ARG PUBLIC_SUPABASE_URL
ARG PUBLIC_SUPABASE_ANON_KEY

FROM base AS builder

WORKDIR /app
COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM base AS production

WORKDIR /app

ENV TZ="Asia/Jakarta"
ENV NODE_ENV="production"

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/bun.lock .

RUN bun install --production

EXPOSE 3000

CMD ["bun", "run", "build/index.js"]