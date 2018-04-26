onmessage = (v) => {
  console.log('worker', v);
  postMessage({
    a: 4,
    b: 5
  });
}