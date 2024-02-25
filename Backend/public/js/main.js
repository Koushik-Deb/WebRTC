const socket = io("/");

socket.io("connect", () => {
  console.log("successfully connected to web socket server");
});
