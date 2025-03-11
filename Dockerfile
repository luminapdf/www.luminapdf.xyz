# Build stage
FROM oven/bun AS builder

ARG PUBLIC_APP_DOMAIN
ARG PUBLIC_SUPABASE_URL
ARG PUBLIC_SUPABASE_ANON_KEY

WORKDIR /app
COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

# Production stage with Nginx
FROM nginx:alpine AS production

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files from builder stage to nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx starts automatically in this image
CMD ["nginx", "-g", "daemon off;"]