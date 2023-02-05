import { Action } from './Action.mjs'
import { print, println, execute } from '../utils.mjs'

export class InstallNpmDependenciesCommand extends Action {
  constructor() {
    super('install-npm-dependencies-command')
  }

  async execute(options) {
    print('Installing dependencies...')
    await execute('npm install')
    println('ok')

    return { readmeCreated: true }
  }
}
