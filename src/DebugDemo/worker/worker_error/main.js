try {
  const worker = new Worker('./worker.js')
  console.log('no error')
} catch(e) {
  console.log('caught error')
}

// no error