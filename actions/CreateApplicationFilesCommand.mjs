import { Action } from './Action.mjs'
import { print, println, extract } from '../utils.mjs'

export class CreateApplicationFilesCommand extends Action {
  constructor() {
    super('create-application-files-command')
  }

  async execute(options) {
    print('Extracting application template...')
    await extract('template.tar')

    println('ok')

    return { applicationFilesInitialized: true }
  }
}
