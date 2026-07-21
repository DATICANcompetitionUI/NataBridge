FROM node:22-slim AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install

COPY . .

RUN pnpm exec ng build --configuration production


FROM nginx:alpine

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]