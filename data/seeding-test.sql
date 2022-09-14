BEGIN;


INSERT INTO "list" ("name", "position") 
  VALUES 
    ('A faire', 10),
    ('Terminé', 32),
    ('Important', 58); 

INSERT INTO "card" ("title", "color", "description", "position", "list_id")
  VALUES
    ('Faire les courses', '#f90', 'penser à prendre du pain', 0, 2),
    ('Apprendre un nouveau langage', 'green', NULL, 1, 2);

INSERT INTO "label" ("title", "color")
  VALUES 
    ('urgent', 'red'),
    ('idée', 'yellow');

INSERT INTO "card_has_label" ("card_id", "label_id")
  VALUES
    (1, 1),
    (2, 1),
    (2, 2);

COMMIT;