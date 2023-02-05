import { Action } from './Action.mjs'
import { print, println, execute } from '../utils.mjs'

export class InitGitRepositoryCommand extends Action {
  constructor() {
    super('init-git-repository-command')
  }

  async enabled(options) {
    return options.initGitRepo
  }

  async execute(options) {
    print('Initializing git repository...')
    await execute('git init .')
    println('ok')

    return { gitRepoInitialized: true }
  }
}
