const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.nrk.no/dokumentar/quiz_-forstar-du-en-gamer_-1.15947379?fbclid=IwAR1_R-P3iYBX3Tr5JsRmn4OcX--93s_RSiLtr7CBnZ7xVXtlOsirGm233Nw"
  );

  await page.evaluate(() => {
    let elements = $(`[data-correctoption*="true"]`).toArray();
    for (i = 0; i < elements.length; i++) {
      $(elements[i]).click();
    }
  });

  await page.screenshot({
    path: "test.jpg",
    fullPage: true,
  });

  await browser.close();
})();
