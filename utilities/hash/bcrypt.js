const argon = require('argon2')



/*async function hash(str) {
    const res =  await argon.hash(str)
    console.log(`:${res}:`);
}

async function verify(hash, str) {
    if (await argon.verify(hash, str)) {
        console.log(true);
    }
    console.log(false);
}


async function ver(hash, str) {
    try {
            if (await argon.verify(hash, str)) {
                console.log(true);
            }
        console.log(false);
        
      } catch (err) {
        console.log("err");
      }
}
*/



async function hash(str) {
    return await argon.hash(str, {
        type: argon.argon2id
    })
}

async function verify(hash, str) {
    if (await argon.verify(hash, str)) {
        return true
    }
    return false
}


async function main(){
    const decrypt =await hash("123")
    console.log(decrypt);

    const res =await verify("$argon2id$v=19$m=4096,t=3,p=1$J3o0hNgjD4apW+JkBuzPMQ$4JXTVzCTjs+lqZR0ka5hKqPiztH5WHM360R0kksti/c" , "123")
    console.log(res);
}


main()



module.exports = {
    hash,
    verify
}