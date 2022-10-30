
#  dockerfile to set up express/axios and start the backend
FROM node:17 as build
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . ./
CMD [ "npm", "start" ]
# set working directory 
WORKDIR /usr/src/app

# install node_modules
ADD package.json /usr/src/app/package.json
RUN npm install

# copy codebase to docker codebase
ADD . /usr/src/app