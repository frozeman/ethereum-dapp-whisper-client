
// get the web3 object
if(typeof web3 === 'undefined') {
    web3  = require('web3');

    // set providor
    web3.setProvider(new web3.providers.HttpSyncProvider("http://localhost:8080"))
}
