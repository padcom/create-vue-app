#!/usr/bin/env node

import { WelcomeMessageCommand } from './actions/WelcomeMessageCommand.mjs'
import { Question } from './actions/Question.mjs'
import { InitGitRepositoryCommand } from './actions/InitGitRepositoryCommand.mjs'
import { CreateApplicationFilesCommand } from './actions/CreateApplicationFilesCommand.mjs'
import { InstallNpmDependenciesCommand } from './actions/InstallNpmDependenciesCommand.mjs'
import { RunTestsCommand } from './actions/RunTestsCommand.mjs'
import { FreezeNodeJsVersionWithNvmCommand } from './actions/FreezeNodeJsVersionWithNvmCommand.mjs'
import { CreateReadmeCommand } from './actions/CreateReadmeCommand.mjs'
import { SummaryCommand } from './actions/SummaryCommand.mjs'
import { OpenVSCodeCommand } from './actions/OpenVSCodeCommand.mjs'

import { error, flushStdin } from './utils.mjs'
import chalk from 'chalk'

const actions = [
  new WelcomeMessageCommand(),
  new Question('initGitRepo', `Would you like to initialize ${chalk.yellow('git')} repository in current folder?`),
  new InitGitRepositoryCommand(),
  new CreateApplicationFilesCommand(),
  new InstallNpmDependenciesCommand(),
  new RunTestsCommand(),
  new Question('freezeNodeJsWithNvm', `Would you like to store current node.js version in ${chalk.yellow('.nvmrc')}?`),
  new FreezeNodeJsVersionWithNvmCommand(),
  new Question('createReadme', `How about a ${chalk.yellow('README.md')}?`),
  new CreateReadmeCommand(),
  new SummaryCommand(),
  new Question('openVSCode', `Would you like to open ${chalk.yellow('vscode')} in this folder now?`),
  new OpenVSCodeCommand(),
]

async function main() {
  let options = {}
  try {
    for (const action of actions)
      if (await action.enabled(options)) {
        await flushStdin()
        const result = await action.execute(options)
        options = { ...options, ...result }
      }
  } catch (e) {
    error(e)
  }
}

main()
