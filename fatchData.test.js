import {fetchData} from './fatchData';
// 回调类型异步函数测试
// test('fetchData 返回结果为{success: true}',(done)=>{//测试异步要用done
//     fetchData((data)=>{
//         expect(data).toEqual({
//             success:true
//         })
//         done();
//     })
// })

test('fetchData 返回结果为{success: true}',()=>{
    fetchData().then((response)=>{
        expect(response.data).toEqual({
            success: true
        })
    })
})