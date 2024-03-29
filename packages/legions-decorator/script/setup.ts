/**
 *
 * @format
 */

import { JSDOM } from 'jsdom';
const dom = new JSDOM(`<!doctype html><html><body><div id="root"></div></body></html>`, {
  url: 'http://localhost:8080/main.html?name=zhaoliang&age=18',
  beforeParse(window) {},
});
global['document'] = dom.window.document;
// @ts-ignore
global['window'] = dom.window;
global['navigator'] = dom.window.navigator;
// refs only work with mount, yes.

