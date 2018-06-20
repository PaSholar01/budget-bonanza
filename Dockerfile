FROM node:9.11.2-jessie
# base image to build from
RUN npm install -g serve
CMD serve -s build
EXPOSE 5000

COPY package.json package.json
RUN npm install

COPY . . 

RUN npm run build --production