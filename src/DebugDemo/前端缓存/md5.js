const crypto = require('crypto');
const fs = require('fs');

module.exports = (filePath) => {
	//读取一个Buffer
	let buffer = fs.readFileSync(filePath);
	let fsHash = crypto.createHash('md5');

	fsHash.update(buffer);
	return fsHash.digest('hex');
}