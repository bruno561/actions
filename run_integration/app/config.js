const core = require('@actions/core');

const TEST_MODE_SMOKE = "smoke";

const selectedTests = core.getInput('selected_tests');
const env = core.getInput('env');
const branch = core.getInput('branch');
const hash = core.getInput('hash');
const repository = core.getInput('repository');
const pullRequest = core.getInput('pull_request');
const testMode = core.getInput("test_mode");

const configs = {
    SelectedTests: selectedTests || '[]',
    Env: env || '',
    Branch: branch || '',
    Hash: hash || '',
    Repository: repository || '',
    PullRequest: pullRequest || '',
    TestMode: testMode || ''
};

function buildChangeSet() {
    return {
        env: configs.Env,
        branch: configs.Branch,
        repository: configs.Repository,
        hash: configs.Hash,
      }
}

function isSmoke() {
    return configs.TestMode == TEST_MODE_SMOKE;
}

core.info(`Configs: ${JSON.stringify(configs)}`);

module.exports = { ...configs, isSmoke, buildChangeSet };