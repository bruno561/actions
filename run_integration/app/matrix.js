const core = require('@actions/core');
const api = require('./api');

function getMainMatrix(onSuccess, onError) {
    try {
        const env = core.getInput('env');
        const endpoint = api.buildEndpoint(env, api.GET_MAIN_MATRIX_PATH);
        api.doGet(endpoint, onSuccess, onError);
    } catch(error) {
        core.setFailed(error.message);
        if(onError) onError(error);
    }
}
  
function runMatrix() {
    core.info("TEST MODE: MATRIX");

    getMainMatrix(
    (main) => {
        try {
            const env = core.getInput('env');
            const endpoint = api.buildEndpoint(env, api.POST_MATRIX_PATH);
            
            const body = { ...main.data, is_re_run: true };
            
            const onSuccess = function(res) { core.info(`response: ${JSON.stringify(res.data)}`); }
            const onError = function(err) { core.setFailed(err.message); }
            
            api.doPost(endpoint, body, onSuccess, onError);
        
        } catch(error) {
            core.setFailed(error.message);
        }
    },
    (error) => {
        core.setFailed(error.message);
    });
}

module.exports = { run: runMatrix };
  