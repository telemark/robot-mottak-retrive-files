FROM node:10.11.0-alpine@sha256:3450751aaca30f6d49f2e9897763d755ce5faf37f3b11dee2e606e6f37ef468c

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
