const core = require('@actions/core');
const axios = require('axios');
const yaml = require('js-yaml');
const fs = require('fs');

const specPath = core.getInput('spec_file');
const datadogApiKey = core.getInput('dd_api_key');
const datadogApplicationKey = core.getInput('dd_application_key');
const headers = {
  'Content-Type': 'application/json',
  'DD-API-KEY': datadogApiKey,
  'DD-APPLICATION-KEY': datadogApplicationKey,
}

const serviceSpec = yaml.load(
  fs.readFileSync(specPath, 'utf8')
);

core.info(`sending service spec to datadog: ${JSON.stringify(serviceSpec)}`);

axios.post('https://us5.datadoghq.com/api/v2/services/definitions', serviceSpec, { headers })
  .then(function (_) {
    core.info(`service spec updated`);
  })
  .catch(function (error) {
    core.error(`failed to update service spec because ${error.response.data}`);
  });