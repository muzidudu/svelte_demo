import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
export function start(){
    return nprogress.start()
}
export function done()
{
    return nprogress.done()
}
// export default function() {
//     return nprogress
// }