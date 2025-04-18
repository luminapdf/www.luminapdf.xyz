FROM oven/bun AS base

ARG PUBLIC_APP_DOMAIN
ARG PUBLIC_DASHBOARD_URL
ARG PUBLIC_SUPABASE_URL
ARG PUBLIC_SUPABASE_ANON_KEY
ARG PUBLIC_API_DOCS_URL
ARG PUBLIC_API_URL
ARG PUBLIC_TURNSTILE_SITE_KEY
ARG PUBLIC_PDF_GENERATION_COST
ARG PUBLIC_SCREENSHOT_GENERATION_COST

FROM base AS builder

WORKDIR /app
COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM base AS production

WORKDIR /app

ENV NODE_ENV="production"

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/bun.lock .

RUN bun install --production

EXPOSE 3000

CMD ["bun", "run", "build/index.js"]