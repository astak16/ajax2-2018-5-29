// myButton.addEventListener('click',() => {
//     let request = new XMLHttpRequest();
//     console.log(request)
//
//     request.open('post','http://frank.com:8889/xxx');
//
//     request.onreadystatechange = function(){
//
//         if(request.readyState === 4){
//             if(request.status === 200){
//                 let string = request.responseText;
//                 let string1 = request.response;
//                 console.log(typeof string)
//                 console.log(typeof string1)
//                 let object = JSON.parse(string1);
//                 console.log(object);
//             }
//         }
//     };
//     request.send()
//
// });

// window.jQuery = function(){}



// window.jQuery.ajax = function({url,method,success,fail}){
//     let request = new XMLHttpRequest();
//     request.open(method,url);
//     request.onreadystatechange = () => {
//         if(request.readyState === 4){
//             if(request.status >= 200){
//                 success.call(undefined,request.responseText);
//             }else if(request.status >=400 ){
//                 fail.call(undefined,request)
//             }
//         }
//     };
//     request.send();
// };
// window.$ = window.jQuery
//
// myButton.addEventListener('click',() => {
//     $.ajax({
//         url : '/xxx',
//         method : 'post',
//         body : 'a=1&b=2',
//         success : (responseText) => {console.log(responseText)},
//         fail : (request) => {console.log(request)}
//     })
// })

window.jQuery = () => {}
window.jQuery.ajax = ({url,method,body}) => {
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest
        request.open(method,url)
        request.send(body)
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status >= 200){
                    resolve.call(undefined,request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined,request)
                }
            }
        }

    })
}
window.$ = window.jQuery
myButton.addEventListener('click',() => {
    $.ajax({
        url : '/xxx',
        method: 'post',
        body : 'a=1&b=2'
    }).then(
        (responseText) => {console.log(responseText)},
    (request) => {console.log(request)}
)
})