const { Client } = require('pg');

const client = new Client({
    host: '127.0.0.1',
    user: 'postgres',
    database: 'travel',
    password: '2283',
    port: 5432,
});



client.connect()
.then(()=> console.log("connected"))
.then(()=>client.query("SELECT * FROM users"))
.then(reslut=> console.log(reslut))
.catch((err)=>console.log(err))
.finally(()=>client.end())


// client.query(`DROP TABLE users` , (err , result)=>{
//     if(!err){
//         console.log(result.rows);
//     }
//     console.log(err);
// })


