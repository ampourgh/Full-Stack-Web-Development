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
   
-- Second subquery looks for areas where the Federal Aviation Administration region are ASO.
    
SELECT * 
FROM flights 
WHERE origin in (
    SELECT code 
    FROM airports 
    WHERE faa_region = 'ASO');
    
-- 

SELECT a.dep_month,
       a.dep_day_of_week,
       -- averaging out the flight count
       AVG(a.flight_count) AS average_flights
  FROM (
        SELECT dep_month,
              dep_day_of_week,
               dep_date,
                -- counting the number of flights by week and month  
               COUNT(*) AS flight_count
          FROM flights
         GROUP BY 1,2,3
       ) a
 GROUP BY 1,2
 
 
SELECT a.dep_month,
       a.dep_day_of_week,
        -- Sum distance is for the days are then averaged out displayed displayed for the month and week       
       AVG(a.flight_distance) AS average_distance
  FROM (
        -- Get the sum distance from flights for week, date and month       
        SELECT dep_month,
              dep_day_of_week,
               dep_date,
               sum(distance) AS flight_distance
          FROM flights
         GROUP BY 1,2,3
       -- subquery is labeled as 'a'        
       ) a
 GROUP BY 1,2
 ORDER BY 1,2;
 
--  Query Result example for above:
-- dep_month	dep_day_of_week	average_distance
-- 2000-01	Monday	1302.0
-- 2000-01	Saturday	328.0
-- 2000-01	Sunday	691.333333333333
-- 2000-01	Thursday	1805.0


-- Find the id of the flights whose distance is below average for their carrier.
SELECT id
FROM flights as fly
-- Subquery for comparing inside carrier of all average distance to the id's carrier 
WHERE distance < (
 SELECT AVG(distance)
 FROM flights
 WHERE carrier = fly.carrier);
 
-- write a query to view flights by origin, flight id, and sequence number. 
-- Alias the sequence number column as flight_sequence_number.

-- SELECT origin, id and flight_sequence number
SELECT origin, id,
    (SELECT COUNT(*)
     FROM flights f
     -- f is inside, flights is outside     
		 WHERE f.id < g.id
		 AND f.origin=g.origin) + 1 AS flight_sequence_number
FROM flights as g;

-- Merging brands from different tables
SELECT brand FROM legacy_products
UNION 
SELECT brand FROM new_products;

-- Make union between order items and historical, then get the average sales price 
SELECT id, avg(a.sale_price) FROM (
  SELECT id, sale_price FROM order_items
  UNION ALL
  SELECT id, sale_price FROM order_items_historic) AS a 
  GROUP BY 1;

-- Select from different tables where there is an intesect of category
SELECT category FROM new_products

INTERSECT

SELECT category FROM legacy_products;

-- Select from one, that is not in the other
SELECT category FROM legacy_products

EXCEPT

SELECT category FROM new_products;
