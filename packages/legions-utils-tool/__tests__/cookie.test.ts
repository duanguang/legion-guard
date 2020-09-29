import { setCookie, getCookie,removeCookie,clearAllCookie } from '../src/cookie';
import { JSDOM } from 'jsdom';
describe('测试公用工具类', () => {
    it('测试设置 获取cookie', () => {
      const { window } = new JSDOM(
        `<!doctype html><html><body>
        <div id="root"></div></body></html>`,
        {
          beforeParse(window) {
            global['document'] = window.document;
            setCookie('username', 'iloveu', 10);
            expect(getCookie('username')).toBe('iloveu');
          },
        }
      );
    });
    it('测试移除cookie', () => {
        const { window } = new JSDOM(
          `<!doctype html><html><body>
          <div id="root"></div></body></html>`,
          {
            beforeParse(window) {
              global['document'] = window.document;
              removeCookie('username');
              expect(getCookie('username')).toBe('');
              // @ts-ignore
              expect(getCookie()).toBe('');
            },
          }
        );
      });
      it('测试清空cookie', () => {
        const { window } = new JSDOM(
          `<!doctype html><html><body>
          <div id="root"></div></body></html>`,
          {
            beforeParse(window) {
              global['document'] = window.document;
              setCookie('username1', 'iloveu1', 10);
              clearAllCookie();
              expect(getCookie('username')).toBe('');
              expect(getCookie('username1')).toBe('');
            },
          }
        );
      });
      it('测试清空cookie', () => {
        const { window } = new JSDOM(
          `<!doctype html><html><body>
          <div id="root"></div></body></html>`,
          {
            beforeParse(window) {
              global['document'] = window.document;
              clearAllCookie();
              expect(getCookie('username')).toBe('');
            },
          }
        );
      });
});
  

