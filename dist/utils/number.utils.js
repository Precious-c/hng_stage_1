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
exports.getFacts = exports.getProperties = exports.sumOfDigits = exports.isPerfect = exports.isPrime = void 0;
const isPrime = (num) => {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
};
exports.isPrime = isPrime;
const isPerfect = (num) => {
    if (num <= 1)
        return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i)
                sum += num / i;
        }
    }
    return sum === num;
};
exports.isPerfect = isPerfect;
const sumOfDigits = (num) => {
    const digitsArray = Array.from(String(num), Number);
    const sumOfDigits = digitsArray.reduce((acc, currentValue) => acc + currentValue, 0);
    return sumOfDigits;
};
exports.sumOfDigits = sumOfDigits;
const getProperties = (num) => {
    const numArray = Array.from(String(num), Number);
    let armstrong = 0;
    numArray.forEach((num) => {
        armstrong += Math.pow(num, numArray.length);
    });
    const isEven = num % 2 === 0;
    console.log({ armstrong });
    const properties = [];
    if (armstrong === num)
        properties.push("armstrong");
    isEven ? properties.push("even") : properties.push("odd");
    console.log(properties);
    return properties;
};
exports.getProperties = getProperties;
const getFacts = (num) => __awaiter(void 0, void 0, void 0, function* () {
    let fact = "";
    try {
        const response = yield fetch(`http://numbersapi.com/${num}/trivia`);
        if (!response.ok) {
            const response = fetch(`http://numbersapi.com/${num}/trivia`);
            throw new Error("Error fetching data");
        }
        fact = yield response.text();
    }
    catch (error) {
        console.error("fetch error: ", error);
    }
    return fact;
});
exports.getFacts = getFacts;
