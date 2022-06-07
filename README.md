<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>


# Inventar

Spletna aplikacija Inventar je rešitev, ki uporabnikom omogoča, da enostavneje in hitreje opravijo z inventuro. S pomočjo mobilnega telefona ali tablice skeniramo QR kodo, tako pa pridobimo podatke o skeniranem produktu.

## Funkcionalnosti

Naša rešitev je v celoti sestavljene iz spletne aplikacije in je namenjena vsem, ki opravljajo inventuro. Za uporabo aplikacije se je naprej potrebno vpisati z Google računom. V aplikaciji je omogočen pregled, dodajanje, spreminjanje ter brisanje vseh različnih kategorij, vseh zaposlenih ter seveda vseh produktov kateri pa imajo tudi svojo unikatno QR kodo. Omogočeno je tudi filtriranje po zaposlenih, tako, da ima vsak zaposlen lažji pregled nad tem, kaj je napisano na njegovo ime.

## Elektronsko vodenje inventarja (ASSET MANAGEMENT)

-Razvoj spletne aplikacije za vodenje inventarja IT opreme znotraj podjetja, kjer so vsi kosi opreme označeni s QR kodo kjer se nahajajo vsi podatki z ohišja/embalaže t.j. Serijska številka,  številka inventarja(Product ID), model,... Naknadno se potem izpolni stanje kosa opreme
<script src="js/readMore.jquery.js"></script> ali je ta v uporabi, v skladišču ali pa upokojen(zlomljen, pokvarjen, prodan). Ob skeniranju QR kode se uporabniku na napravi izpiše izkaznica izdelka (serijska stevilka, ime, stanje, kdo je lastnik...). V bazi je seznam zaposlenih katerim se lahko dodeli lastništvo opreme.


React Native  <br />
Generirat je treba QR nalepke z izkaznico asseta  <br />
https://github.com/microsoft/InQRy predlog za generiranje QR kod kjer se potem shranijo informcije (pyhton)  <br />
WebApp za vodenje teh assetov potem v React Native backend pa z nodeom/pyhton?  <br />
Neka baza uporabnikov oz zaposlenih. Rešitev je namenjena izključno za admine. <br />
Baza vseh assetov- Asset rabi Model(svoja entiteta?) Serijska številka, številka inventarja(productId), amortizacijska doba. 
<br />
Možnost vnosa asseta ob nabavi. Ko se asset upokoji se izbriše iz baze. <br />

Še en predlog https://github.com/snipe/snipe-it (Laravel)




-cilj je popis inventarja
-kaj se naredi ob premikih inventure(npr. iz enega oddelka na drugega)
-kaj se zgodi ob menjavi med dvema zaposlenima
-kaj se naredi ce ti nekaj odneses domov
-amortizacija
-popis inventarja ni enodelni proces