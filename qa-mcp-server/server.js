console.log("QA MCP Server started");

process.stdin.on("data", (data) => {
  const message = data.toString().trim();

  console.log("Received:", message);

  process.stdout.write(`Server received: ${message}\n`);
});