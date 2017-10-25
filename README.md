## Web Pages to PNG

This set of docker containers is specifically structured to convert SVG (diagrams) to PNGs.

### Building
```
docker build -t rbuckland/chromium-page-saver chromium-page-saver/
```

### Usage
docker run -ti -v `pwd`:/x --rm rbuckland/mxgraph https://github.com github2.png

### Debugging
$ docker run -ti -v `pwd`:/x --rm --entrypoint /bin/bash/ rbuckland/chromium-page-saver 
root@cafe6788:/x$ /usr/bin/node chromium-page-saver.js <url> <output.png>
