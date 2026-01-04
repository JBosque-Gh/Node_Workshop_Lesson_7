const core = require('@actions/core');
const github = require('@actions/github');

try {
  const jsNum1 = Number(core.getInput('number1') || 0);
  const jsNum2 = Number(core.getInput('number2') || 0);
  result = parseInt(jsNum1) + parseInt(jsNum2);
  core.setOutput('reult', result);
} catch (error) {
  core.setFailed(error.message);
}
