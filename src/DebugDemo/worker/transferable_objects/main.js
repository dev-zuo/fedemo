const worker = new Worker('./worker.js');

// Create 32 byte buffer
const arrayBuffer = new ArrayBuffer(32);

console.log(`page's buffer size: ${arrayBuffer.byteLength}`);  // 32

// worker.postMessage(arrayBuffer);
worker.postMessage(arrayBuffer, [arrayBuffer]);

console.log(`page's buffer size: ${arrayBuffer.byteLength}`);  // 32