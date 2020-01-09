import {fetchData} from './fatchData';
test('fetchData 返回结果为{success: true}',(done)=>{//测试异步要用done
    fetchData((data)=>{
        expect(data).toEqual({
            success:true
        })
        done();
    })
})