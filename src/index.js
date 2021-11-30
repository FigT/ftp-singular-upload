const core = require('@actions/core');
const github = require('@actions/github');
const ftp = require('basic-ftp');

try {
    let host = core.getInput('host', {required: true});
    let port = parseInt(core.getInput('port')) || 21;
    let user = core.getInput('user', {required: true});
    let pass = core.getInput('pass', {required: true});
    let file = core.getInput('file', {required: true});
    let remotePath = core.getInput('remotePath', {required: true});
    let secure = core.getBooleanInput('secure');

    uploadFile(host, port, user, pass, file, remotePath, secure).then((r => {
        core.setOutput('response', r.message);
    })).catch(e => {
        core.setFailed(e.message);
    });

} catch (e) {
    core.setFailed(e.message);
}

async function uploadFile(host, port, user, pass, file, remotePath, secure) {
    const client = new ftp.Client();
    await client.access({
        host: host,
        port: port,
        user: user,
        password: pass,
        secure: secure
    });
    let response = await client.uploadFrom(file, remotePath);
    await client.close();

    return response;
}