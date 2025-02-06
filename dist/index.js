"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const classifyNumberController_1 = __importDefault(require("./controllers/classifyNumberController"));
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
dotenv_1.default.config({ path: "./src/.env" });
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/api", (req, res) => {
    res.status(200).json({ message: "Welcome to the Number Classification API" });
});
app.get("/api/classify-number/:number", classifyNumberController_1.default);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
