# Number Classification API Documentation

## Overview
The **Number Classification API** takes an integer as input and returns interesting mathematical properties about it, along with a fun fact.

## API Specification

### Endpoint:
```
GET <your-domain.com>/api/classify-number?number=<number>
```

### Query Parameters:
| Parameter | Type | Description |
|-----------|------|-------------|
| number    | int  | The number to classify |

## Response Formats

### Success Response (200 OK)
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)
```json
{
    "number": "alphabet",
    "error": true
}
```

## Example Usage

### Request:
```
GET /api/classify-number?number=371
```

### Response:
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

