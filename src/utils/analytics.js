import { JSONStorage } from 'node-localstorage';
import appData from 'app-data-folder';
import os from 'os';
import packageJson from '../../package.json'
import isDocker from 'is-docker';

const nodeStorage = new JSONStorage(appData('greentunnel'));

function appInit(source = 'OTHER') {
  const osPlatform = os.platform() + (isDocker() ? '-docker' : '')
}

export {appInit};
