
const mysql = require('mysql')

// 连接配置
const cfg = {
  host: 'localhost',
  user: 'root',
  password: '1234567Abc,.',
  database: 'test'
}

// 创建连接对象
const conn = mysql.createConnection(cfg)

// 连接
conn.connect(err => {
  if (err) {
    console.log(err.message)
    throw err
  } else {
    console.log('连接成功!')
  }
})

// 执行mysql语句 conn.query()
const CREATE_SQL = `
  create table if not exists tb_test (
    id int not null auto_increment,
    message varchar(50) null,
    primary key (id)
  )
`
const INSERT_SQL = `insert into tb_test(message) values(?)`
const SELECT_SQL = `select * from tb_test`

// 创建表
conn.query(CREATE_SQL, (err, data) => {
  if (err) {
    throw err
  }
  // 没有报错，说明创建表成功, 没有特别的返回信息
  console.log(data)
})

// 插入数据
conn.query(INSERT_SQL, 'test', (err, data) => {
  if (err) {
    throw err
  } 
  console.log(data) // data.insertId 为插入数据的id
})

// 查询数据
conn.query(SELECT_SQL, (err, data) => {
  if (err) {
    throw err
  } 
  console.log(data)
  // console.log(data[0].id) // 1
})
// [ RowDataPacket { id: 1, message: 'test' },
//   RowDataPacket { id: 2, message: 'test' },
//   RowDataPacket { id: 3, message: 'test' },
//   RowDataPacket { id: 4, message: 'test' } ]