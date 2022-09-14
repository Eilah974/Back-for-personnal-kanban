-- Deploy kanban:initilization to pg

BEGIN;

CREATE TABLE "list" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "name" VARCHAR(255) NOT NULL,
  "position" SMALLINT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "title" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "color" VARCHAR(30),
  "position" SMALLINT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ,
  "list_id" INTEGER NOT NULL REFERENCES "list"("id") ON DELETE CASCADE
);

CREATE TABLE "label" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "title" VARCHAR(255) NOT NULL,
  "color" VARCHAR(30),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card_has_label" (
  "card_id" INTEGER NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
  "label_id" INTEGER NOT NULL REFERENCES "label"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("card_id", "label_id") -- on crée une clé composite, une clé composée de plusieurs colonnes, ça garantit l'unicité de la combinaison
);

COMMIT;
