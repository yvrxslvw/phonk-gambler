import jetpack from 'fs-jetpack';

const pkg = jetpack.read('package.json', 'json');
export const APP_VERSION = pkg.version;
