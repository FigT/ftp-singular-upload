# ftp-singular-upload

This action uploads a single file to an FTP server.
<br><sub>this was meant for a private project</sub>

***

## Inputs

| Name  | Description | Is Required? |
| ------------- | ------------- | ---  |
| `host`  | the hostname of the FTP server | **Yes** |
| `port`  | the port of the FTP server - default value is `21` | **No** |
| `user`  | the username to use for connecting to the FTP server | **Yes** |
| `pass`  | the password to use for connecting to the FTP server | **Yes** |
| `file`  | the path of the file to upload | **Yes** |
| `remotePath`  | the path on the server to upload the file to | **Yes** |
| `secure`  | whether to use FTP *(false)* or FTPS *(true)* - default value is `false` | **No** |
## Outputs

### `response`

the FTP response message including the status code.

***