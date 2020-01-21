
(async () => {
  try {
    const Sequelize = require('sequelize')

    // 建立连接
    // 参数分别为: database, username, password, config
    const sequelize = new Sequelize('test', 'root', '1234567Abc,.', {
      host: 'localhost',
      dialect: 'mysql' // 'mysql' | 'mariadb' | 'postgres' | 'mssql' 之一 
    })
    // 方法2: 传递连接 URI
    // const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

    // 测试连接，使用 .authenticate() 函数来测试连接
    await sequelize.authenticate() // 如果连接异常，会走catch的逻辑

    // 创建表模型
    // public define(modelName: string, attributes: Object, options: Object): Model
    // 使用下面的模型创建表时，会默认加上3个字段 主键id, createdAt, updatedAt
    const Fruit = sequelize.define('fruit', {
      // 指定id属性
      // id: {
      //   type: Sequelize.DataTypes.UUID,
      //   defaultValue: Sequelize.DataTypes.UUIDV1,
      //   primaryKey: true
      // },
      //  UUID: dba3d770-36c0-11ea-bb43-9502bdef4ee8
      name: { type: Sequelize.STRING(20), allowNull: false },
      price: { type: Sequelize.FLOAT, allowNull: false },
      stock: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 }
    }, {
      // conifg
      timestamps: false, // 默认值为true，如果为true会加上createdAt, updatedAt字段
      // freezeTableName: true // 默认为false, 默认情况下会为表名添加一个s，即 fruits，设置为true可以阻止这一默认行为
      tableName: 'tb_fruit' // 指定表名
    })
    // 创建表：将模型同步到数据库
    let ret = await Fruit.sync() // 如果表不存在则同步，否则不处理
    // let ret = await Fruit.sync({force: true}) // 创建之前，先删除原来的表，会删除原来的互数据
    console.log(ret) // 返回 fruit

    // 插入数据（增）
    ret = await Fruit.create({
      name: "香蕉",
      price: 3.5,
      // test: 1 会根据模型来，就算这加了额外的数据，也不会插入到表
    })
    console.log(ret.toJSON()) // 对象里面包含插入的数据行，包含id

    // 查询所有数据（查）
    ret = await Fruit.findAll()
    console.log(ret.length)
    console.log(JSON.stringify(ret)) // 如果不stringify，打印的都是对象

    // 更新 (改)
    // ret = await Fruit.update({ price: 8 }) // 如果没有where会报错
    // 文档 https://demopark.github.io/sequelize-docs-Zh-CN/querying.html
    ret = await Fruit.update({ price: 8 }, {  
      where: {
        price: { [Sequelize.Op.lt]: 2, [Sequelize.Op.gt]: 0 }  // price > 0 and price < 2
      }
    })
    console.log(ret[0]) // 修改影响行数

    // 删除
    ret = await Fruit.destroy({  
      where: {
        price: { [Sequelize.Op.lt]: 1, [Sequelize.Op.gt]: 0 }  // price > 0 and price < 4
      }
    })
    console.log(ret) // 删除行数

  } catch(e) {
    console.log('error message: ', e.message)
  }

})()