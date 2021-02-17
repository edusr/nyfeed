import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async getFeedCardClick(): Promise<void> {
    return element(by.id('feedId_0')).click();
  }

  async getFeedCardText(): Promise<string> {
    return element(by.id('feedId_0')).getText();
  }
}
