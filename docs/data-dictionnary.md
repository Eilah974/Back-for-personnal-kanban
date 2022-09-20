# Data dictionnary

|Fields|Data type|Specificity|Description|
| :-: | :-: | :-: | :-: |
|id|INTEGER|PRIMARY KEY| identity for card, label and list|
|name|VARCHAR|NOT NULL| liste name|
|postion|SMALLINT| NOT NULL DEFAULT 0| List and card position|
|title|VARCHAR| NOT NULL| card and label title|
|description|TEXT| |card description|
|color|VARCHAR| | card and label color|
|list_id|INTEGER|FOREIGN KEY| |
|card_id|INTEGER| FOREIGN KEY| |
|label_id|INTEGER| FOREIGN KEY| |
|created_at|TIMESTAMPTZ| NOT NULL DEFAULT NOW()| creation date|
|updated_at|TIMESTAMPTZ| | update date|