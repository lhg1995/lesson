const math = require('./math.js')
import { add, minus, multi } from './math'

test('测试加法3+7',()=>{
    expect(add(3,7)).toBe(10)
})

test('测试加法3-3',()=>{
    expect(minus(3,3)).toBe(0)
})

test('测试加法3*3',()=>{
    expect(multi(3,3)).toBe(9)
    console.log(111)
})
//单元测试/集成测试
// npm run jest 
// jest (babel-jest)
// bebel-core
// 取  .babelrc配置
// 在运行测试之前，结合babel，先对代码进行一次转化
// 运行转化过的测试用例代码