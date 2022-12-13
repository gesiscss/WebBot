
export default class Transfer {

  constructor(url) {
    this.server = url;
    this.DEFAULT_OPTION = {
      method: 'GET',
      headers:{
        'Accept': 'application/json'
      }
    }
  }

  /**
   * [jsonFetch create request with options]
   * @param  {String} url
   * @param  {Object} options [default: this.DEFAULT_OPTION]
   * @return {Promise} Object
   */
  jsonFetch(url, options=this.DEFAULT_OPTION){
    return this._fetch(url, options);
  }

  /**
   * [fetch json from response url and format it to the default json response]
   * @param  {String} url
   * @param  {Object} options
   * @return {Object} data
   */
  _fetch(url, options){
    return new Promise((resolve, reject)=>{
      var res = null;
      fetch(url, options).then(response => {
        res = response;
        if (!response.ok) throw response.statusText;
        return response.json();
      })
      .then(d => {
        if(d.error != null){
          reject({ 
            message: d.error.message || '', 
            code: d.error.code || '', 
            nr: d.error.nr || ''
          });
        }else {
          //let authData = d.result.authData;
          var data = (typeof d.result==='object' && d.result.hasOwnProperty('data'))? d.result.data: d.result;
          resolve(data);
        }
      }).catch(err => {
        //if (this.debug) console.log('Failed to Fetch JSON: ', url);
        //console.log(err);
        reject({
          message: '_fetch: ' + err.message,
          code: '500',
          nr: '-1',
        })
      });
    })
  }

}//class
