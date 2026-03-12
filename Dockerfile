# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
# If there are assets needed at runtime, copy them as well
COPY --from=builder /app/src/common/assets ./src/common/assets

EXPOSE 3000

CMD ["node", "dist/main"]
