const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  const token = core.getInput('github-token', {required: true});
  const octokit = github.getOctokit(token);

  const labels = ['devops', 'demo'];

  await octokit.rest.issues.addLabels({
    ...github.context.repo,
    labels: labels
  });
} 

run();