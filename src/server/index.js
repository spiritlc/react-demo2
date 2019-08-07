export default function doLogin(userName) { // 模拟登录
    return new Promise(resolve => {
        setTimeout(() => {
            if (userName === 'Tom') {
                console.log('logingsuccess')
                resolve({
                    responseCode: '0'
                })
            } else {
                resolve({
                    responseCode: '99999'
                })
            }
        }, 1000);
    })
}