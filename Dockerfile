FROM node:10.10.0-alpine@sha256:b2425698ca602430b042b9e754f48eda37d32ee2404615f3087fe3beea02e439

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
