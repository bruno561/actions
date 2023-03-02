const core = require('@actions/core');
const configs = require('./config');
const api = require('./api');

function runSmoke() {
    core.info("TEST MODE: SMOKE");

    try {  
        const endpoint = api.buildEndpoint(configs.Env, api.POST_SMOKE_PATH);
        
        const body = {
            selected_tests: JSON.parse(configs.SelectedTests),
            create_new_account: true,
            change_set: configs.buildChangeSet(),
        };

        core.info('sending test plan:');
        core.info(JSON.stringify(body));

        const onSuccess = function(res) { core.info(`response: ${JSON.stringify(res.data)}`); }
        const onError = function(err) { core.setFailed(err.message); }

        api.doPost(endpoint, body, onSuccess, onError);
      
    } catch (error) {
        core.setFailed(error.message);
    }
}

module.exports = { run: runSmoke };
