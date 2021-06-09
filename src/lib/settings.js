/*global settings*/
/*global chrome*/
/*global browser*/
if(typeof settings == 'undefined'){
  var settings = (chrome? chrome: browser).extension.getBackgroundPage().settings
}
/**
 * [deliver name and browser info]
 * @return {Object} [{name: '', version: 0}]
 */
settings.getBrowser = () => {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1]||'')};
        }
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0].toLowerCase(),
      version: parseInt(M[1], 10)
    };
 }

export default settings
