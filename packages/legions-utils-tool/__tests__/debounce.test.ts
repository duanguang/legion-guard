import {debounce} from '../src/debounce'
describe('测试公共工具类',()=>{
    it('测试防抖函数', (done) => {
        var callCount = 0;
    
        var debounced = debounce(() => {
          ++callCount;
        }, 200);
    
        debounced();
    
        setTimeout(debounced, 190);
        setTimeout(debounced, 200);
        setTimeout(debounced, 210);
    
        setTimeout(() => {
          expect(callCount).toStrictEqual(1)
          done();
        }, 500);
      });
})
