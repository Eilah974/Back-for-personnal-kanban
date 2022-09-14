-- Revert kanban:initilization from pg

BEGIN;

DROP TABLE "list", "card", "label", "card_has_label";
COMMIT;
