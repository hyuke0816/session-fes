import mysql from "mysql2";
import fs from "fs";
import multer from "multer";
import bodyParser from "body-parser";

var db_info = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "dkdl15477MAS!!",
  database: "gitadora",
};

module.exports = {
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql connection error : " + err);
      else console.log("mysql is connected successfully!");
    });
  },
};
