
// export default class http{
//   /**GET  */
//   $get(url = '', data = {}, header = {},complete = () => {}){
//     const method= 'GET'
//     this.$ajax(url, data , method,header,complete)
//   }
//   /**POST  */
//   $post(url = '', data = {}, header = {},complete = () => {}){
//     const method= 'POST'
//     this.$ajax(url, data , method,header,complete)
//   }

//   $delete(url = '', data = {}, header = {},complete = () => {}){
//     const method= 'DELETE'
//     this.$ajax(url, data , method, header, complete)
//   }

//   /**使用promise封装，上面的只是参数method不同 */
//   $ajax(
//     {url = '', data = {}, method = 'GET', header = {},complete = () => {},success = () =>{}}
//   ){
//     //return ()=>{
//       return new Promise((resolve,fail)=>{

//         wx.showNavigationBarLoading()

//           const req = {
//             url,
//             method,
//             header: Object.assign({
//             }, headers),
//             data: Object.assign({
//             }, data),
//             complete
//           }
//           /**合并参数*/
//           wepy.request(
//             Object.assign(req),
//             {
//               success: (res)=>{
//                 success.call(null,res)
//                 resolve.call(null,res)
//               },
//               fail: (res)=>{
//                 fail.call(null,res)
//               },
//               complete: (res)=>{
//                 complete.call(null,res)
//               }
//             }
//           )
//         })
//       //}
//     }
// }
/**如果接口之间必须是依次调用可以使用peomise.then,
async function doIt() {
 await $get({}),
 await $get({}),
 await $get({})
}
doIt()
or
//if return ()=>{}
a = $get({})
b = $get({})
c = $post({})
如果并发可以使用promise.all*/
