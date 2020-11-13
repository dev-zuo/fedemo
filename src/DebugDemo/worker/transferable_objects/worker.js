self.onmessage = ({data}) => {
  console.log(`worker's buffer size: ${data.byteLength}`);     // 32
};