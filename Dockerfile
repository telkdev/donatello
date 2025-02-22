FROM node:20.10-alpine

WORKDIR /usr/src/app


ARG SERVER_URL
ENV SERVER_URL=$SERVER_URL

ARG WEB_URL
ENV WEB_URL=$WEB_URL

RUN npm install -g pnpm

ADD . /usr/src/app/

RUN pnpm install

EXPOSE 3000

RUN pnpm run build

CMD [ "node", ".output/server/index.mjs" ]