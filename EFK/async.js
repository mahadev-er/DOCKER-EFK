async function test() {
  // This function will print "Hello, World!" after 1 second.
  await new Promise((resolve) => setTimeout(() => resolve(), 1000));
  console.log('Hello, World!');
}
test();
