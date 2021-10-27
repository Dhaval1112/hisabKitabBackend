const { Entry, Room } = require("../models/room");

var socketID = 11;

const onConnect = (socket, io) => {
	console.log("\n\nSocket created and id is :: ", socket.id);

	socketID = socket.id;
	socket.emit("chat", "Hello world");
	console.log("PRIVATE SOCKET", io.engine.clientsCount);
	socket.on("chat", (data) => {
		console.log(data);
	});

	socket.on("getData", (data) => {
		console.log(data);
	});

	socket.on("doEntry", (data) => {
		// console.log(data);
		const entry = new Entry(data.entry);
		const amount = entry.amount * (entry.isRecieve ? 1 : -1);

		console.log("Remaining amount before ", entry.remainAmount);
		entry.remainAmount += amount;
		console.log("Remaining amount after ", entry.remainAmount);

		console.log("amount :: ", amount);
		Room.findOneAndUpdate(
			{ _id: data.roomId },
			{
				$push: {
					entries: entry,
				},
				$inc: {
					grandTotal: amount,
				},
			},
			(error, success) => {
				if (error && !success) {
					io.to(socketID).emit("EntryStatus", { status: false, error });
					// io.to(socketID).emit("EntryStatus", "HELLO");
					console.log(false);
				} else {
					io.to(socketID).emit("EntryStatus", { status: true, entry });
					// io.to(socketID).emit("EntryStatus", "HELLo");
					console.log(true);
				}
			}
		);
	});
};

module.exports = onConnect;
