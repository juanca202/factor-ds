declare var require: any;

export const versionInfo = (() => {
  try {
    // tslint:disable-next-line:no-var-requires
    const git = require('../git-version.json');
    const npmPackage = require('../package.json');
    return { npmPackage, git };
  } catch {
    // In dev the file might not exist:
    return { name: '', version: '0.0.0', git: { raw: '' } };
  }
})();
