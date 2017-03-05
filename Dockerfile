FROM node:6.4.0

RUN mkdir -p /usr/src/angular2-google-maps && chmod 0777 -R /usr/src/angular2-google-maps
WORKDIR /usr/src/angular2-google-maps

COPY package.json /usr/src/angular2-google-maps/package.json
RUN npm install

RUN npm install concurrently lite-server typescript typings -g
RUN typings install

COPY . /usr/src/angular2-google-maps
RUN chmod 0777 -R /usr/src/angular2-google-maps

CMD [ "npm", "start" ]    