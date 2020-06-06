FROM node:10

# WORKDIR specifies the directory our
# application's code will live within
WORKDIR /app

# We copy our package.json file to our
# app directory
COPY package.json yarn.lock /app/

# We then run npm install to install
# the npm dependencies for our application
RUN yarn install --pure-lockfile

# We then copy the rest of our application
# To the app directory
COPY . /app

# Copy package.json so it can be read in the application
COPY package.json /app/src

# We start our application by calling
# npm start
CMD ["yarn", "start"]

EXPOSE 3000
