self.onmessage = ({data}) => {
  const view = new Uint32Array(data);

  // Perform 1000000 add operations 执行 100 万次加 1 操作
  for (let i = 0; i < 1E6; ++i) {
    // view[0] += 1;
    Atomics.add(view, 0, 1)
  }

  self.postMessage(null);
};