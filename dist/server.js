"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const dbUrl = config_1.default.mongodb_uri;
const connection = mongoose_1.default.connect(dbUrl);
app_1.default.listen(config_1.default.port, () => {
    if (connection) {
        console.log(`\x1b[47m\x1b[1m\x1b[37mServer is running well on port: ${config_1.default.port}\x1b[0m`);
    }
    else {
        console.error("MongoDB connection error:");
        process.exit(1);
    }
});
exports.default = app_1.default;
