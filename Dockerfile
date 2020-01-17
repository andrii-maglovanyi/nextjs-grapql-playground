ARG NODE_ENV=development

FROM node:12-alpine AS base

# Print current environment config
RUN node -v && npm -v

# Copy app dependencies
COPY package*.json ./
COPY web/package*.json ./web/
COPY server/package*.json ./server/

# Install common modules
RUN npm install --quiet \
    && npm --prefix server install --quiet \
    && CYPRESS_INSTALL_BINARY=0 npm --prefix web install --quiet

# Bundle app source
COPY . .

# Build app source
RUN npm run build

FROM base AS production-builder

# Copy app dependencies and build source
COPY --from=base package*.json ./
COPY --from=base server/package*.json server/dist ./server/
COPY --from=base web/package*.json web/.next ./web/

# Install production modules
RUN npm install --production --quiet \
    && npm --prefix server install --production --quiet \
    && npm --prefix web install --production --quiet

FROM base AS development-builder

# Copy app dependencies and installed modules
COPY --from=base package*.json node_modules ./
COPY --from=base web/package*.json web/node_modules ./web/
COPY --from=base server/package*.json server/node_modules ./server/

FROM ${NODE_ENV}-builder as final

ENV NODE_ENV=${NODE_ENV}

# Define app directory
WORKDIR /usr/src/app

# Copy built sources from parent
COPY --from=0 . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

EXPOSE 4000 7777 8080

CMD /wait && if [ "$NODE_ENV" = "production" ]; \
    then npm start; \
    else npm run watch; \
    fi;
