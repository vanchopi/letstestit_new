# ---------- build ----------
FROM node:20-alpine AS build
WORKDIR /app

# deps
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# source
COPY . .

# build (Nuxt SSR -> .output)
RUN npm run build

# ---------- runtime ----------
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

# copy build output only
COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
