\* 
Query the names of all the Japanese cities in the CITY table. 
The COUNTRYCODE for Japan is JPN. 
https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg
*\

SELECT NAME
FROM CITY
WHERE COUNTRYCODE = 'JPN';

// All attributes
SELECT *
FROM CITY
WHERE COUNTRYCODE = 'JPN';

\*
Query the names of all American cities in CITY with populations larger than 120000. 
The CountryCode for America is USA.
*\

SELECT NAME
FROM CITY
WHERE COUNTRYCODE = 'USA' AND POPULATION > 120000;

// Select all with specific ID

SELECT *
FROM CITY 
WHERE ID = 1661;

// Query City and State from station table

SELECT CITY, STATE
FROM STATION;
