# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:74ccf977e92c92a17392d0615409f83ef035855805b9d3b63978d3fef4ff5696

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT npm start
