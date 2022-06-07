# Inventar

Spletna aplikacija Inventar je rešitev, ki uporabnikom omogoča, da enostavneje in hitreje opravijo z inventuro. S pomočjo mobilnega telefona ali tablice skeniramo QR kodo, tako pa pridobimo podatke o skeniranem produktu.


## Elektronsko vodenje inventarja (ASSET MANAGEMENT)

-Razvoj spletne aplikacije za vodenje inventarja IT opreme znotraj podjetja, kjer so vsi kosi opreme označeni s QR kodo kjer se nahajajo vsi podatki z ohišja/embalaže t.j. Serijska številka, številka inventarja(Product ID), model,... Naknadno se potem izpolni stanje kosa opreme ali je ta v uporabi, v skladišču ali pa upokojen(zlomljen, pokvarjen, prodan). Ob skeniranju QR kode se uporabniku na napravi izpiše izkaznica izdelka (serijska stevilka, ime, stanje, kdo je lastnik...). V bazi je seznam zaposlenih katerim se lahko dodeli lastništvo opreme.


## Funkcionalnosti

Naša rešitev je v celoti sestavljene iz spletne aplikacije in je namenjena vsem, ki opravljajo inventuro. Za uporabo aplikacije se je naprej potrebno vpisati z Google računom. V aplikaciji je omogočen pregled, dodajanje, spreminjanje ter brisanje vseh različnih kategorij, vseh zaposlenih ter seveda vseh produktov kateri pa imajo tudi svojo unikatno QR kodo. Omogočeno je tudi filtriranje po zaposlenih, tako, da ima vsak zaposlen lažji pregled nad tem, kaj je napisano na njegovo ime.

<p float="left">

<img src="https://github.com/mirmiha/Inventar/blob/main/Screens/Filtriranje%20produktov.png" width="500" height="300" />

<img src="https://github.com/mirmiha/Inventar/blob/main/Screens/Kategorije.png" width="500" height="300" />

</p>
<p float="left">

<img src="https://github.com/mirmiha/Inventar/blob/main/Screens/Produkti.png" width="500" height="300" />

<img src="https://github.com/mirmiha/Inventar/blob/main/Screens/Zaposleni.png" width="500" height="300" />

</p>

 ### QR-koda ter skeniranje

Unikatno generirane QR-kode skeniramo in tako pridobimo vse potrebne podatke iz produktov

<img src="https://github.com/mirmiha/Inventar/blob/main/Screens/QR-koda.png" width="500" height="300" />

<img src="https://github.com/mirmiha/Inventar/blob/main/Screens/IzpisQR.png" width="500" height="1000" />


<img src="https://github.com/mirmiha/Inventar/blob/main/Screens/PrikazDelovanja.gif" widt="500" height="1000" />

````
```

 <QRCode
                value={`Ime Produkta: ${props.product?.name}
                Serijska Stevilka: ${props.product?.serijskaStevilka}
                Stevilka Inventarja: ${props.product?.stevilkaInventarja}
                Datum: ${props.product?.datum}
                Naziv: ${props.product?.model}
                Kategorija: ${props.product?.category?.name}
                Zaposlen: ${props.product?.supplier?.name}`}
              />

```
````


## ARHITEKTURA

Aplikacija ima enostavno arhitekturo. Vsebuje tabele zaposlenih, kategorij ter produktov.

<img src="https://github.com/mirmiha/Inventar/blob/main/Screens/baza.png" width="650" height="300" />


Skripta s testnimi podatki v bazi
[Skripta](https://github.com/mirmiha/Inventar/blob/main/baza/vnosniPodatki.sql)


## TEHNOLOŠKI SKLAD

 <ul>
  <li>Typescript</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>ExpressJS</li>
</ul> 


# VZPOSTAVITEV

Če želite vzpostaviti spletno aplikacijo, najdete podrobnejša navodila na spodnjem linku:



[Zagon Aplikacije](https://github.com/mirmiha/Inventar/blob/main/back/README.md)


# AVTORJI

<ul>
    <li>Eleonora Loshkoska</li>
    <li>Miha Mir</li>
    <li>Jure Trtnik</li>
</ul>





<!--
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
-->
