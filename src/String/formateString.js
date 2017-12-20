/**
 * [formateString 简单的字符串模板]
 * @param  {[String]} str            [需要处理的字符串]
 * @param  {[Object]} data           [替换的数据]
 * @return {[String]}                [返回处理好的字符串]
 */
 /** demo
 *   let tempStr =  '<div>{#editBtn#}</div>'
 *   if (iCanEdit) {
 *      tempStr = formateString(tempStr, '<button>编辑</button>')
 *   }
 **/
export default function formateString(str, data) {
    return str.replace(/\{#(\w+)#\}/g, function (match, key) {
        return _typeof(data[key]) === undefined ? '' : data[key];
    });
}
