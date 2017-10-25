
//
// ramon@thebuckland.com - so small it's not funny
//

var the_url      = process.argv[2];
var the_filename = process.argv[3];

console.log(":: Saving " + the_url + " to " + the_filename);

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
//	console.log('Server running on 8080...');
//      With this running we can serve up local files in the current dir like - http://localhost:8080/helloworld.html
});

const puppeteer = require('puppeteer');

(async (url, filename) => {
      const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
      const page = await browser.newPage();
      page.on('console', msg => console.log('PAGE LOG:', ...msg.args));
      await page.goto(url);
      await page.screenshot({path: filename});
      await browser.close();
      await process.exit();
})(the_url, the_filename);
