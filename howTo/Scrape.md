# Scraping

> TL;DR I wanted to scrape soundcloud but data loads asynchronously. I found that I was spending too much time trying to build a scraper when I didnt need one. Here's my solution

## Purpose / Why / goals

- I wanted to programatically update a webpage with recent tracks from a user from soundcloud
- Due to high volumes of requests, they arent allowing new/further access to their API and wont let users generate keys
- On my initial scrape using sveltekit server code, I found that none of the html I wanted was loading

## Solution

- I'm now manually navigating to the website of choice letting the page load and scrolling to the very bottom to reveal all HTML
- I'm writing vanilla JS in the dev tools to access dom nodes and click them
- lastly, I'm using a basic promise to force the application to wait for hydration of data

## Code

1. Create a delay function

```js
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
```

2. Since im navigating to the page I want i can create an array of all the buttons that will need to be clicked with JS

```js
// using the accumulator pattern to build the array as i loop
const embeddedCode = [];
const arrayOfShareButtons = document.querySelectorAll(".sc-button-share");
```

3. loop the buttons, click them, wait for modals, copy the desired text, close modal, move to next one.

```js
// This is everything together because describing each step is custom to this web page, but the general idea works for anything
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const embeddedCode = [];
const arrayOfShareButtons = document.querySelectorAll(".sc-button-share");

const processButton = async (button) => {
  button.click(); // opens modal
  await delay(1000); // Wait for the modal to open and the tabs to be available
  const tabs = document.querySelectorAll(
    "li.g-tabs-item > a.tabs__tab.g-tabs-link"
  );

  if (tabs[1].textContent.trim() === "Embed") {
    tabs[1].click(); // clicks on embed
    await delay(1000);

    document.querySelectorAll(".embedPanel__tab > a")[0].click(); // clicks the preferred embed option
    await delay(1000);

    const embedInput = document.querySelector(
      "input.widgetCustomization__textInput.widgetCustomization__widgetCode"
    );

    if (embedInput) {
      embeddedCode.push(embedInput.value);
    }

    const closeButton = document.querySelector("button.modal__closeButton");

    if (closeButton) {
      closeButton.click();
      await delay(1000);
    }
  } else {
    const closeButton = document.querySelector("button.modal__closeButton");

    if (closeButton) {
      closeButton.click();
      await delay(1000);
    }
  }
};

const processAllButtons = async () => {
  console.log("Begin processing");
  for (const button of arrayOfShareButtons) {
    await processButton(button);
  }
  console.log("Completed processing all buttons");
  console.log("Embedded Codes:", embeddedCode);
};

processAllButtons();
```

4. The takeaway here is that despite not using a scraper I'm going through the motions of traversing the dom tree and triggering browser actions. Ideally this could be put into a headless browser and run from a server, but I didnt feel like dealing with new dev packages when I could quickly whip this up and run it in dev tools.
