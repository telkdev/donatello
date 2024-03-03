FROM node:20.10-alpine


WORKDIR /usr/src/app

RUN npm install -g pnpm

ADD . /usr/src/app/

RUN pnpm install

EXPOSE 3000

RUN pnpm run build

CMD [ "node", ".output/server/index.mjs" ]