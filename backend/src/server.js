// config data
import { DEFAULT_CONNECTION_STRING, PORT, MONGOOSE_OPTIONS } from "./config/connectionDb.js";

// connect to express
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());

// Controller
import professionalController from "./controllers/professional.controller.js";
import userController from "./controllers/user.controller.js";
import servicesController from "./controllers/services.controller.js";
import serviceCardController from "./controllers/serviceCard.controller.js";
import serviceProfessionalController from "./controllers/serviceProfessional.controller.js";
import professionalProfileController from "./controllers/professionalProfile.controller.js";

app.use("/professional", professionalController);
app.use("/users", userController);
app.use("/services", servicesController);
app.use("/serviceCard", serviceCardController);
app.use("/serviceProfessional", serviceProfessionalController);
app.use("/professionalProfile", professionalProfileController);

app.listen(PORT, () => console.log(`Urban Comapny is connected successfully to Express. Listening on port ${PORT}.`));

// Only connect to MongoDB if not in mock mode
if (process.env.MOCK_DB !== 'true') {
  const mongoose = await import('mongoose');
  mongoose.default.connect(DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS);
  mongoose.default.connection.on("error", err => {
    console.log("Connection Error: Urban Comapny could not connect successfully to Mongoose.", err);
  });
  mongoose.default.connection.on("connected", (err, res) => {
      console.log("Urban Comapny connected successfully to Mongoose.");
  });
} else {
  console.log("[MOCK MODE] Skipping MongoDB connection. Backend running without database.");
}