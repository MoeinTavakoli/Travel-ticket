// const config = {
//     db:{
//         Host: "localhost",
//         Port: 5432,
//         User: "postgres",
//         Password: '2283',
//         Database: "postgres"
//     }
// }



// module.exports = config

// host: 'localhost', // server name or IP address;
// port: 5432,
// database: 'travel',
// user: 'postgres',
// password: '2283'

const config = {
    databse: {
        Host: "localhost",
        Port: 5432,
        User: "postgres",
        Password: '2283',
        Database: "postgres"
    }
}



console.log(typeof config.databse.Password);

module.exports = config
