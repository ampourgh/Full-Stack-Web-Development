-- Query the names of all the Japanese cities in the CITY table. 
-- The COUNTRYCODE for Japan is JPN. 
-- https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg

SELECT NAME
  FROM CITY
  WHERE COUNTRYCODE = 'JPN';

-- All attributes

SELECT *
  FROM CITY
  WHERE COUNTRYCODE = 'JPN';

-- Query the names of all American cities in CITY with populations larger than 120000. 
-- The CountryCode for America is USA.

SELECT NAME
  FROM CITY
  WHERE COUNTRYCODE = 'USA' AND POPULATION > 120000;

-- Select all with specific ID

SELECT *
  FROM CITY 
  WHERE ID = 1661;

-- Query City and State from station table

SELECT CITY, STATE
  FROM STATION;
 
-- Query the Name of any student in STUDENTS who scored higher than  Marks. 
-- Order your output by the last three characters of each name. 
-- If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), 
-- secondary sort them by ascending ID.

SELECT NAME 
  FROM STUDENTS 
  WHERE MARKS > 75 
  ORDER BY RIGHT(NAME, 3), ID ASC;
  
-- TABLES INCLUDE:
-- GRADES: https://s3.amazonaws.com/hr-challenge-images/12891/1443818137-69b76d805c-2.png
-- STUDENTS: https://s3.amazonaws.com/hr-challenge-images/12891/1443818093-b79f376ec1-3.png
-- OUTPUT QUERY: NAME/MARK/GRADE
-- Print "NULL"  as the name if the grade is less than 8.

SELECT (CASE WHEN GRADE < 8 THEN NULL ELSE NAME END) NAME, 
       GRADE, 
       MARKS
FROM STUDENTS, 
     GRADES
WHERE (MARKS BETWEEN MIN_MARK AND MAX_MARK)
ORDER BY MARKS DESC;

-- Limits to the first 10 flihts that pop up within the query.
SELECT * 
FROM flights
LIMIT 10;

-- Subquery returns the codes with an elevation greater than 2000, 
-- Origin is a column within the airport table

SELECT * 
FROM flights 
WHERE origin in (
    SELECT code 
    FROM airports 
    WHERE elevation > 2000);
