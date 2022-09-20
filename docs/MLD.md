# MLD for Personnal-kanban

- list (<span style="text-decoration: underline">id</span>, name, position, created_at, updated_at)
- card (<span style="text-decoration: underline">id</span>, title, description, color, position, created_at, updated_at, #list_id)
- label (<span style="text-decoration: underline">id</span>, title, color, created_at, updated_at)
- card_has_label (#card_id, #label_id, created_at)