FROM node:22.19.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

COPY prisma ./prisma
RUN npx prisma generate

# Build do TypeScript
RUN npx tsup src --out-dir build --format cjs

# CMD padrão
CMD ["node", "build/server.js"]