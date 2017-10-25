FROM ubuntu:17.10

ENV DEBIAN_FRONTEND=noninteractive
#
# We are basing off of ubuntu because we want to install servo 
# 
#
#
# includes npm 5.3.0 which is what we want
ENV NODE_VERSION=v8.6.0 

RUN apt-get update && apt-get install -y curl git vim tmux screen zutils \
                      # this set is for chromium (embedded in puppeteer below)
                      xvfb libgtk-3-0 libgtk2.0-0 libxtst6 libxss1 libgconf-2-4 libnss3 libasound2

RUN curl -o /tmp/node.tar.xz https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.xz 
RUN cd /usr && tar xJvf /tmp/node.tar.xz --strip 1
RUN npm install -g typescript 
RUN npm install puppeteer connect serve-static 

# https://github.com/jgraph/mxgraph/issues/83
# specifically a pain. 

WORKDIR /x

ENTRYPOINT ["/usr/bin/node", "chromium-page-saver.js"]
