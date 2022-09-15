# Back-for-personnal-kanban
Ceci est un mini projet d'API backend pour un kanban perso.

---

## Pour tester l'API
=> Créer votre base de données avec PostgreSQL.  
=> Faire les migrations avec Sqitch en faisant sqitch deploy.  
=> Importer le seeding de test.  
=> Lancer le serveur via npm run dev.  

N'oubliez pas de vous créer un fichier .env et sqitch.conf en utilisant vos propres informations (cf: .env.example et sqitch.example.conf)

---

## Les routes liées à l'API (avec CRUD)
### Pour les cartes
=> Avoir l'ensemble des cartes et créer une carte (méthodes get et post): 
```
/cards
```

=> Avoir le détail d'une carte, la modifier ou la supprimer (méthodes get, put et delete):
```
/cards/:id
```

=> Ajouter ou supprimer des labels sur la carte (méthodes post et delete):
```
/cards/:cardId/label/:labelId
```

### Pour les labels
==> Avoir l'ensemble des labels et créer un label (méthodes get et post): 
```
/labels
``` 

=> Avoir le détail d'un label, le modifier ou le supprimer (méthodes get, put et delete):
```
/labels/:id
```

### Pour les listes
==> Avoir l'ensemble des listes et créer une liste (méthodes get et post): 
```
/lists
``` 

=> Avoir le détail d'une liste, la modifier ou la supprimer (méthodes get, put et delete):
```
/lists/:id
```

=> Voir les cartes associées à une liste (méthode get):
```
/lists/:id/cards
```

---

## Technos utilisées
Pour ce mini projet d'API back pour kanban perso, voici la liste des technos utilisées:  
=> Node.JS et express  
=> Sequelize (ORM)  
=> Sqitch (pour les migrations)  
=> PostgreSQL (base de donées)  

---