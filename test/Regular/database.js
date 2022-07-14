const { 
    createPool
} = require('mysql');


const pool = createPool({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"sys",
    connectionLimit:4,
})

let output;
  
const setOutput = (rows) => {
    output = rows;
    console.log(output);
}

pool.query('select * from version',(err,rows,fields)=>{
    if(err){
        return console.log(err);
    }
    //return console.log(result);
    
   /* for (var i in rows)
        {
            var results = rows[i];
            MyID=results;
            console.log(MyID);

        }*/
        setOutput(rows);

})

module.exports = pool;