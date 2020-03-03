# Your First Pull Request

> Welcome! This project was created for the sole purpose of helping up and coming developers get their first pull request. If you have yet to make your first PR, then you're in the right place. 
> 

## Guidelines
- First timers are more than welcome, with that being said, anyone else can contribute
- This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). Please give it a read. 

## Getting Started
- Fork the project. [Go Here](https://github.com/JasonFritsche/YourFirstPullRequest) and click the `Fork` button on the page.
- Clone your forked project.
- Make sure you're in the right directory. 
- Add an upstream remote for keeping your local repo up-to-date
- Run `npm install` to install project dependencies.

## Creating a new Pull Request
- Make sure you are on the `master` branch, and you have pulled the latest changes. <br/>   `git checkout master && git pull upstream master` 
- Install any new dependencies: `npm install`.
- Create a new branch off of the `master` branch. <br>`git checkout -b [NEW BRANCH NAME]` 

 > **Branch naming conventions:** `fix/[BRANCH]` for bug fixes, `feat/[BRANCH]` for new features, `doc/[BRANCH]` for changes to documents. The `[BRANCH]` portion should be kebab case. For example, if you want to update the README.md file, your branch could be called `doc/update-readme`.
- Push your branch to your fork: `git push -u origin [BRANCH NAME]`.
- Open a new PR against the `master` branch from your fork using the GitHub user interface.
