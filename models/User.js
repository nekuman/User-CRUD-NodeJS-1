const db = require("../config/db");

class User {
  constructor(props) {
    this.userName = props.userName;
    this.password = props.password;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.address = props.address;
    this.postCode = props.postCode;
    this.contactNumber = props.contactNumber;
    this.email = props.email;
  }

  save() {

    let sql = `
        INSERT INTO users(
        userName,
        password,
        firstName,
        lastName,
        address,
        postCode,
        contactNumber,
        email
        )
        VALUES 
        ('${this.userName}',
        '${this.password}',
        '${this.firstName}',
        '${this.lastName}',
        '${this.address}',
        '${this.postCode}',
        '${this.contactNumber}',
        '${this.email}')
        `;

    return db.execute(sql);
  }

  update() {
    let sql = `
        UPDATE users set 
        password = '${this.password}',
        firstName = '${this.firstName}',
        lastName = '${this.lastName}',
        address = '${this.address}',
        postCode = '${this.postCode}',
        contactNumber = '${this.contactNumber}',
        email = '${this.email}'
        where userName = '${this.userName}'
    `
    return db.execute(sql)
  }

  static delete(ids) {
    let sql = `
        DELETE FROM users WHERE userName IN (${ids})
    `
    return db.execute(sql)
  }

  static findAll() {
    let sql = "SELECT * FROM users;";

    return db.execute(sql);
  }
  static findById(id) {
    let sql = `SELECT * FROM users WHERE userName = '${id}';`;

    return db.execute(sql);
  }
}

module.exports = User;
