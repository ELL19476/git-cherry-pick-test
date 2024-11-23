FROM node
ARG NPM_TOKEN
WORKDIR /app
COPY . /app
RUN echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" > /app/.npmrc
RUN npm install
RUN rm -f /app/.npmrc
EXPOSE 3000
ENTRYPOINT ["npm", "run"]