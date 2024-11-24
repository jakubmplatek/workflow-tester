const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
  const token = core.getInput('github-token', {required: true});
  const octokit = github.getOctokit(token);

  const { data: pullRequest } = await octokit.rest.pulls.list({
    ...github.context.repo
  });

  console.log(pullRequest);
}

run();