const core = require('@actions/core');
const axios = require('axios');

const POST_SMOKE_PATH = "/run";
const POST_MATRIX_PATH = "/run_matrix";
const GET_MAIN_MATRIX_PATH = "/matrix/defs/main";

const isLocalhost = process.env.IS_LOCALHOST === '1';

function buildEndpoint(env, path) {
    if (isLocalhost) {
        return `http://localhost:8084/api${path}`;
    }
    return `https://${env}-inttest.avenuesec.io/api${path}`;
}

function doGet(endpoint, onSuccess, onError) {
    core.info(`doGet:${endpoint}`);
    const headers = {'Content-Type': 'application/json'};

    axios.get(endpoint, { headers: headers })
    .then(response => {
        if(onSuccess) onSuccess(response);
    })
    .catch(err => {
        handlerError(err);
        if(onError) onError(err);
    });
}

function doPost(endpoint, body, onSuccess, onError) {
    core.info(`doPost:${endpoint}`);
    core.info(`Body:${JSON.stringify(body)}`);
  
    const headers = {'Content-Type': 'application/json'};
    
    axios.post(endpoint, body, { headers: headers })
    .then(function (response) {
        core.info(`integration has started: ${JSON.stringify(response.data)}`);
        if(onSuccess) onSuccess(response);
    })
    .catch(function (error) {
        handlerError(error);
        if(onError) onError(error);
    });
}

function handlerError(error) {
    core.info(error.message);
    if (error.response) {
      core.info(error.response.data);
    }
}

module.exports = {
    buildEndpoint,
    doGet,
    doPost,
    POST_SMOKE_PATH,
    POST_MATRIX_PATH,
    GET_MAIN_MATRIX_PATH,
};