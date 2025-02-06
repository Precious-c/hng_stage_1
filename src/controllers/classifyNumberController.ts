import { Request, Response } from "express";
import { getFacts, getProperties, isPerfect, isPrime, sumOfDigits } from "../utils/number.utils";

const classifyNumber = async (req: Request, res: Response) => {
  try {
    const { number } = req.query;
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
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties: getProperties(num),
      digit_sum: sumOfDigits(num),
      fun_fact: await getFacts(num),
    };

    res.status(200).json(result);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

export default classifyNumber;
