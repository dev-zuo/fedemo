/**
 * 基本功能，实例创建、三种状态
 * 1. 返回一个 MyPromise 实例，状态为 pending，值为 undefined
 * 2. 返回一个 MyPromise 实例，状态为 fulfilled，值为 'hello'
 * 3. 返回一个 MyPromise 实例，状态为 reject，值为 error
 * 4. 状态落定后测试，返回一个 MyPromise 实例，状态为 reject, 值为 error
 */
new MyPromise(() => {})
new MyPromise(resolve => resolve('hello'))
new MyPromise((resolve, reject) => reject('error'))
new MyPromise((resolve, reject) => {
  reject('error')
  resolve('hello')
})

/**
 * _then 函数基本用法 - pending 状态时
 * b 返回 pending 状态的 MyPromise 实例，且 _then 传入的两个函数都没有执行
 */
a = new MyPromise(() => {})
b = a._then(data => console.log(data), (err) => console.log(err))

/**
 * _then 函数基本用法 - 异步触发
 * 1. 3秒后，是否执行传入的第一个函数
 * 2. 3秒后，是否执行传入的第二个函数
 */
a = new MyPromise(resolve => setTimeout(resolve, 3000))
b = new MyPromise((resolve, reject) => setTimeout(reject, 3000))
a._then(data => console.log('success'), err => console.log(err))
b._then(data => console.log(data), err => console.log('error'))

/**
 * _then 函数基本用法 - resolve 传值，回调函数返回值测试
 * _then 传入的第一个函数有执行，第二个函数未执行
 * 1. 返回值 data 为 hello
 * 2. b 返回 fulfilled 状态的 MyPromise 实例，值为 'abc', a !== b
 * 3. b 返回 fulfilled 状态的 MyPromise 实例，值为 'test', a !== b
 * 4. b 返回 rejected 状态的 MyPromise 实例，值为 'error', a !== b
 * 5. b 返回 pending 状态的 MyPromise 实例，值为 undefined, a !== b
 */
a = new MyPromise(resolve => resolve('hello'))
b = a._then(data => console.log(data), err => console.log(err))
b = a._then(data => 'abc', err => console.log(err))
b = a._then(data => new MyPromise(resolve => resolve('test')), err => console.log(err))
b = a._then(data => new MyPromise((resolve, reject) => reject('error')), err => console.log(err))
b = a._then(data => new MyPromise(() => {}), err => console.log(err))

/**
 * _then 函数基本用法 - reject 传值，回调函数返回值测试
 * _then 传入的第二个函数有执行，第一个函数未执行
 * 1. 返回值 err 为 "error"
 * 2. b 返回 fulfilled 状态的 MyPromise 实例，值为 'abc', a !== b
 * 3. b 返回 fulfilled 状态的 MyPromise 实例，值为 'test', a !== b
 * 4. b 返回 rejected 状态的 MyPromise 实例，值为 'error', a !== b
 * 5. b 返回 pending 状态的 MyPromise 实例，值为 undefined, a !== b
 */
a = new MyPromise((resolve, reject) => reject('error'))
b = a._then(data => console.log(data), err => console.log(err))
b = a._then(data => console.log(data), err => 'abc')
b = a._then(data => console.log(data), err => new MyPromise(resolve => resolve('test')))
b = a._then(data => console.log(data), err => new MyPromise((resolve, reject) => reject('error')))
b = a._then(data => console.log(data), err => new MyPromise(() => {}))

/**
 * _then 函数基本用法 - 回调函数不传时/_catch，返回实例状态是否正常
 * 1. b 是原 MyPromise 实例的副本，状态 fulfilled, 值 hello，a !== b
 * 2. b 是原 MyPromise 实例副本，状态 rejected, 值 error, a2 !== b
 * 3. 测试 _catch 返回是否执行正常，返回 fulfilled，值为 undefiend, a2 !== c
 */
a = new MyPromise(resolve => resolve('hello'))
b = a._then(null, err => console.log(err))
a2 = new MyPromise((resolve, reject) => reject('error'))
b = a2._then(data => console.log(data), null)
c = a2._catch(err => console.log(err))

/**
 * _then 回调执行顺序测试
 * 打印顺序 done、done2、a1、a2
 */
a = new MyPromise(r => r('a1')); 
a._then((d) => console.log(d));
console.log('done')
a2 = new MyPromise(r => r('a2')); 
a2._then((d) => console.log(d));
console.log('done2')

/**
 * MyPromise.resolve 与 MyPromise.reject 测试
 * 1. 返回 MyPromise 实例, 状态 fulfilled, 值 123
 * 2. 返回 MyPromise 实例, 状态 pending, 值 undefined
 * 3. 返回 MyPromise 实例, 状态 fulfilled, 值 hello
 * 4. 返回 MyPromise 实例, 状态 rejected, 值 err
 * 5. 返回 MyPromise 实例, 状态 rejected, 值 err
 * 6. 返回 MyPromise 实例, 状态 rejected, 值 MyPromise 实例 pending
 * 7. 返回 MyPromise 实例, 状态 rejected, 值 MyPromise 实例 resolve
 * 8. 返回 MyPromise 实例, 状态 rejected, 值 MyPromise 实例 reject
 */
a = MyPromise.resolve('123')
a = MyPromise.resolve(new MyPromise(() => {}))
a = MyPromise.resolve(new MyPromise(resolve => resolve('hello')))
a = MyPromise.resolve(new MyPromise((resolve, reject) => reject('err')))
a = MyPromise.reject('err')
a = MyPromise.reject(new MyPromise(() => {}))
a = MyPromise.reject(new MyPromise(resolve => resolve('hello')))
a = MyPromise.reject(new MyPromise((resolve, reject) => reject('err')))


/**
 * MyPromise.prototype._finally 测试
 * 1. 打印 a， b 返回新的 MyPromise 实例，状态为 fulfilled, 值 success
 * 2. 打印 a2， b2 返回新的 MyPromise 实例，状态为 rejected, 值 error
 * 3. 不打印 a3， b3 返回新的 MyPromise 实例，状态为 pending, 值 undefined
 * 4. 返回值测试, c 返回新的 MyPromise 状态为 pending
 * 5. d 返回新的 MyPromise 状态为 rejected
 */
a = new MyPromise(r => r('success')); 
b = a._finally(() => console.log('a')) //
a2 = new MyPromise((r, j) => j('error')); 
b2 = a2._finally(() => console.log('a2')) // 
a3 = new MyPromise(() => {})
b3 = a3._finally(() => console.log('a3')) // 
c =  a._finally(() => new MyPromise(() => {})) // 
d =  a._finally(() => MyPromise.reject('error')) // 