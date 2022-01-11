// https://webdriver.io/docs/configurationfile.html
export const config: { connectionRetryCount: number; reporters: string[]; capabilities: { browserName: string }[]; specs: string[]; path: string; hostname: string; baseUrl: string; framework: string; logLevel: string; waitforTimeout: number; connectionRetryTimeout: number; mochaOpts: { ui: string; timeout: number }; runner: string; maxInstances: number } = {
    runner: 'local',
    specs: [
        './src/**/registrationNFSpage.ts'
    ],
    hostname: process.env.SELENIUM_HUB_HOST ?? 'localhost',
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    baseUrl: 'https://mtxcapital.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
