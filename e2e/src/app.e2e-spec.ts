import { browser, element,by, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a card with content', async () => {
    await page.navigateTo();
    expect(await page.getFeedCardText()).toContain(`Hear the Sound of a Seashell Horn Found in an Ancient French Cave`);
  });

  it('should display a modal', async () => {
    await page.navigateTo();
    page.getFeedCardClick();
    await browser.sleep(1000);
    expect(element(by.className('mat-dialog-container ng-tns-c39-1 ng-trigger ng-trigger-dialogContainer ng-star-inserted')).isDisplayed()).toBeTruthy;
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
