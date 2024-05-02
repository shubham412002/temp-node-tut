const os = require('os');

console.log(os.platform());

const user = os.userInfo();
console.log(user);

// system uptime 
console.log(`sytem uptime is ${os.uptime()} seconds`);

const osInfo = {
    platform: os.platform(),
    hostname: os.hostname(),
    type: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces(),
    freeMem: os.freemem()
}

console.log(osInfo);