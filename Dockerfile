FROM node:10.14.2-alpine@sha256:539572fabf307f60709a4e0c5f9595f37ed99200b2224b0e42bef539415ac319

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git openssl

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT npm start
