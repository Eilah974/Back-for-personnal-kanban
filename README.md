# Back-for-personnal-kanban
This is a mini backend API project for a custom kanba.

---

## To test the API
=> Create your database with PostgreSQL.  
=> Do migrations with Sqitch by doing sqitch deploy.  
=> Import test seeding.  
=> Launch server with npm run dev.  

Don't forget to create yourself a .env and sqitch.conf file using your own information (cf: .env.example and sqitch.example.conf).

---

## API related routes (with CRUD)
### For cards
=> Get the set of cards and create a cards (get and post methods): 
```
/cards
```

=> Get the card's detail, modify it or delete it (get, put and delete methods):
```
/cards/:id
```

=> Add or remove labels on the map (post and delete methods):
```
/cards/:cardId/label/:labelId
```

### For labels
==> Get the set of labels and create a label (get and post methods): 
```
/labels
``` 

=> Get the label's detail, modify it or delete it (get, put and delete methods):
```
/labels/:id
```

### For lists
==> Get the set of lists and create a list (get and post methods): 
```
/lists
``` 

=> Get the list's detail, modify it or delete it (get, put and delete methods):
```
/lists/:id
```

=> See cards associated with a list (get method):
```
/lists/:id/cards
```

---

## Technologies used
For this mini back API project for personal kanban, here is the list of technologies used:  
=> Node.JS et express  
=> Sequelize (ORM)  
=> Sqitch (for migrations)  
=> PostgreSQL (datbase)  

---