FROM node:10


RUN mkdir /express.boilerplate.server
WORKDIR /express.boilerplate.server

COPY . .
COPY package.json /express.boilerplate.server

# Bundle app source
COPY . /express.boilerplate.server
# Build assets

ENV NODE_ENV=development

# Install app dependencies
RUN npm install

ENV PORT 5000
EXPOSE 5000

CMD [ "npm", "start" ]