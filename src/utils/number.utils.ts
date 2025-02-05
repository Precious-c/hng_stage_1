import { error } from "console";
import { response } from "express";

export const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

export const isPerfect = (num: number): boolean => {
  if (num <= 1) return false;

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }

  return sum === num;
};

export const sumOfDigits = (num: number): number => {
  const digitsArray = Array.from(String(num), Number);

  const sumOfDigits = digitsArray.reduce((acc, currentValue) => acc + currentValue, 0);

  return sumOfDigits;
};

export const getProperties = (num: number): string[] => {
  const numArray = Array.from(String(num), Number);

  let armstrong = 0;

  numArray.forEach((num) => {
    armstrong += Math.pow(num, numArray.length);
  });

  const isEven = num % 2 === 0;

  console.log({ armstrong });

  const properties = [];

  if (armstrong === num) properties.push("armstrong");
  isEven ? properties.push("even") : properties.push("odd");

  console.log(properties);

  return properties;
};

export const getFacts = async (num: number): Promise<string> => {
  let fact = "";
  try {
    const response = await fetch(`http://numbersapi.com/${num}/trivia`);
    if (!response.ok) {
      const response = fetch(`http://numbersapi.com/${num}/trivia`);
      throw new Error("Error fetching data");
    }

    fact = await response.text();
  } catch (error) {
    console.error("fetch error: ", error);
  }

  return fact;
};
