FROM node:10.11.0-alpine@sha256:782a30c4579ed318edada6cfa945e6804cc0835799be785172429e88f11ec39f

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
