FROM node:22-slim

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

RUN pnpm install --no-optional --ignore-scripts
RUN pnpm exec esbuild --version 2>/dev/null || echo 'esbuild option

RUN apt-get purge -y python3 make g++ && apt-get autoremove -y

COPY . .

EXPOSE 4200

CMD ["pnpm", "exec", "ng", "serve", "--host=0.0.0.0"]