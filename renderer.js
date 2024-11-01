async function test() {
  const response = await window.api.ping();

  console.log(response);
}

test();
