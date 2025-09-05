FROM node:22.19.0

WORKDIR /app

# Copia dependências
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma
COPY .env.build .env
COPY entrypoint.sh ./entrypoint.sh

RUN npm install
RUN npx tsup src --out-dir build --format cjs

# Permite execução do entrypoint
RUN chmod +x entrypoint.sh

# ENTRYPOINT: aplica migrations e sobe servidor
ENTRYPOINT ["./entrypoint.sh"]