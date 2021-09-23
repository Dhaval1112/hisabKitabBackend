const onConnect = (socket, io) => {
  console.log("\n\nSocket created and id is :: ", socket.id);

  socket.emit("chat", "Hello world");
  // console.log(io);
  socket.on("chat", (data) => {
    console.log(data);
  });
};

module.exports = onConnect;
