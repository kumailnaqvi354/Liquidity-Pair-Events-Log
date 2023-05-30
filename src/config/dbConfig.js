import pg from 'pg';
import dotenv from 'dotenv'
dotenv.config()


const db = new pg.Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBDATABASE,
  password: process.env.DBPASSWORD,
  port: 5432,
})

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export default db