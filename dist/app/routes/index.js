"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesPath = void 0;
const express_1 = __importDefault(require("express"));
const book_routes_1 = __importDefault(require("../modules/books/book.routes"));
const user_routes_1 = __importDefault(require("../modules/users/user.routes"));
const router = express_1.default.Router();
exports.routesPath = [
    {
        endpoint: "/books",
        route: book_routes_1.default,
    },
    {
        endpoint: "/user",
        route: user_routes_1.default,
    },
];
exports.routesPath.map(item => router.use(item.endpoint, item.route));
const APIv1Routes = router;
exports.default = APIv1Routes;
