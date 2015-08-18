var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '3h4h3hbuxom',
    database : 'TWWebBasic'
});


function dbinit(){
    connection.connect();

    connection.query('CREATE TABLE IF NOT EXISTS student(student_id int(4) not null primary key auto_increment,student_name varchar(20) not null);', function(err, rows, fields) {
        if (err) throw err;

        console.log('table created');
    });

    connection.end();
}

module.exports = dbinit;