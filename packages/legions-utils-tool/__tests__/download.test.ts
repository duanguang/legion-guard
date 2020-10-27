import { download } from '../src/download'
import { JSDOM } from 'jsdom';
describe('测试公共工具',()=>{
    it('测试download函数', () => {
        const { window } = new JSDOM(
          `<!doctype html><html><body>
          <div id="root"></div></body></html>`,
          {
            beforeParse(window) {
                global['document'] = window.document;
                global['navigator'] = window.navigator;
                download([])
                download(['https://hlfs01.oss-cn-shenzhen.aliyuncs.com/prod/4pl/2020/08/21/导入进货货物清单模板-20200821114533.xlsx'])
            },
          }
        );
      });
})