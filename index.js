const core = require('@actions/core');

try {
  const n1 = Number(core.getInput('number1') || 0);
  const n2 = Number(core.getInput('number2') || 0);
  const sum = n1 + n2;
  core.setOutput('reult', String(sum));
} catch (error) {
  core.setFailed(error.message);
}
