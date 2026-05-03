# Stage 1: Build the React app
FROM node:20-slim AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Copy a custom nginx config to handle SPA routing and the $PORT env var
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Use a shell script to replace the port in nginx config at runtime
CMD ["/bin/sh", "-c", "sed -i 's/LISTEN_PORT/'\"$PORT\"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
