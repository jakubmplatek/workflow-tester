const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  const token = core.getInput('github-token', {required: true});
  const octokit = github.getOctokit(token);

  const { data: pullRequest } = await octokit.rest.pulls.list({
    ...github.context.repo
  });

  console.log(pullRequest);
}

run();