FROM node:20-alpine
WORKDIR /app

RUN apk add --no-cache openssl

RUN npm config set strict-ssl false
RUN npm config set registry https://registry.npmjs.org/

COPY package*.json ./
RUN npm install --unsafe-perm --legacy-peer-deps

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
