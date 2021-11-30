const searchInput = element(by.id("addOverlay"));
const searchButton = element(by.css('aria-label="Search for inbox"'));

const MailinatorMainPage = function () {
  this.get = function () {
    browser.get("https://www.mailinator.com/");
  };

  this.setSearchValue = function (value) {
    searchInput.sendKeys(value);
  };

  this.clickGoButton = function () {
    searchButton.click();
  };
};

module.exports = new MailinatorMainPage();
