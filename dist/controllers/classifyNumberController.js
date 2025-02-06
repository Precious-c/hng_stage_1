"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const number_utils_1 = require("../utils/number.utils");
const classifyNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { number } = req.params;
        const num = Number(number);
        if (isNaN(num)) {
            res.status(400).json({ number: "alphabet", error: true });
            return;
        }
        // Checks if number is an integer
        if (!Number.isInteger(num)) {
            res.status(400).json({ number: "Not an integer", error: true });
            return;
        }
        const result = {
            number: num,
            is_prime: (0, number_utils_1.isPrime)(num),
            is_perfect: (0, number_utils_1.isPerfect)(num),
            properties: (0, number_utils_1.getProperties)(num),
            digit_sum: (0, number_utils_1.sumOfDigits)(num),
            fun_fact: yield (0, number_utils_1.getFacts)(num),
        };
        res.status(200).json(result);
        return;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
exports.default = classifyNumber;
