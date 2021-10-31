const { hashSync, compare } = require('bcryptjs');



async function hash(string, salt = '$2a$10$ejceehrwm4/fVuxayGiq3e') {
    return hashSync(string.toString(), salt)

}


async function verify(string, hash) {
    const res = await compare(string.toString(), hash)
    console.log(res);
}




module.exports = {
    hash, verify
}