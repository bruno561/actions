const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');
const moment = require('moment');

const integrationUrl = core.getInput('integration_url');
const services = JSON.parse(core.getInput('services')) || [];

core.info(`found ${services.length} to report a deployment`)

const baseBody = {
  deployer: {
    name: github.context.actor,
  },
  environment: core.getInput('environment'),
  description: core.getInput('description') || `${github.context.actor} approved a deployment`,
  dedup_id: github.context.runId,
  deploy_number: github.context.runNumber,
  deploy_url: `${github.context.serverUrl}/${github.context.repo.owner}/${github.context.repo.repo}/actions/runs/${github.context.runId}`,
  commit: {
    sha: github.context.sha,
    branch: github.context.ref
  },
  deployed_at: moment().toISOString()
};

for (const i in services) {
  const service = services[i];

  const body = {
    ...baseBody,
    service: service
  };

  core.info(`reporting deployment of ${service}`);
  core.info(`req body: ${JSON.stringify(body)}`)

  axios.post(integrationUrl, body, { headers: { 'Content-Type': 'application/json' } })
    .then(function (res) {
      core.info(`deploy has been reported: ${service}`);
    })
    .catch(function (error) {
      core.error(`failed to report deployment for: ${service}, because ${error.response.data}`);
    });
}

core.info(`deployments reported`);