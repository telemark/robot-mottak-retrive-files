FROM node:10.11.0-alpine@sha256:5de3905c643ae9c01a8cbd8ef7209b1a7907ef515eb933a4cbf19ced7d5867ae

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
