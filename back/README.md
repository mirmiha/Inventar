ZAGON APLIKACIJE

1. Kloniraj repository
2. V terminalu zaženi ``npm install`` ali ``yarn install`` v obeh mapah ``back`` in ``front``
3. V mapi back preglej datoteko ``.env`` in zamenjaj podatke po potrebi
4. v phpmyadmin kreiraj novo database z imenom ``inventar``
5. Zaženi ``back`` ter ``front`` v terminalu z ukazom `npm start`.
6. Opcijsko lahko dodaš še vnosne podatke v phpmyadmin, tako, da gres pod zavihek sql in notri vstavis
    ze narejeno skripto, katero lahko najdes [tukaj](https://github.com/mirmiha/Inventar/blob/main/baza/vnosniPodatki.sql)



### Primer ``.env``

````
```

PORT="5000"
NODE_ENV="development"
DB_NAME="inventar"
TEST_DB_NAME=""
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD=""
DB_DIALECT="mysql"

```
````
