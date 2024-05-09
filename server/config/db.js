// placeholder
const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
    const conn =  mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/chatapp", 
    //   {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  );

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1); // Exit with a non-zero status code to indicate an error
//   }
// };

module.exports = mongoose.connection;