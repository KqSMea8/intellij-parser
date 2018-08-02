SELECT a.id FROM dataphin WHERE id = 10 OR name = 'Jay' AND age < 158 ORDER BY id LIMIT 18 OFFSET 26;

INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees');

SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
INNER JOIN Orders
ON Persons.Id_P = Orders.Id_P
ORDER BY Persons.LastName;

SELECT * FROM (
  SELECT * FROM (SELECT a,b,c,d FROM (SELECT * FROM card) a1) a 
  UNION ALL SELECT * FROM (
    SELECT e,f,g,i FROM(SELECT * FROM version) b1 
  ) b
);