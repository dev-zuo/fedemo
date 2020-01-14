
(async () => {
  try {
    const mysql = require('mysql2/promise')
    // 连接配置
    const cfg = {
      host: 'localhost',
      user: 'root',
      password: '1234567Abc,.',
      database: 'test'
    }

    // 创建连接
    let connection = await mysql.createConnection(cfg)

    // 执行mysql语句 conn.execute()
    const CREATE_SQL = `
    create table if not exists tb_test (
      id int not null auto_increment,
      message varchar(50) null,
      primary key (id)
    )
    `
    const INSERT_SQL = `insert into tb_test(message) values(?)`
    const SELECT_SQL = `select * from tb_test`

    let ret = await connection.execute(CREATE_SQL)
    console.log(ret)

    ret = await connection.execute(INSERT_SQL, ['abc'])
    console.log(ret) // ret.insertId

    let [rows, fields] = await connection.execute(SELECT_SQL)
    console.log(rows)
  } catch(e) {
    console.log(e)
  }
})()