# Inventar

Elektronsko vodenje inventarja (ASSET MANAGEMENT)




-Razvoj spletne aplikacije za vodenje inventarja IT opreme na podjetju, kjer so vsi kosi opreme, ki niso smatrani kot potrošni material označeni s QR kodo kjer se nahajajo vsi podatki z ohišja/embalaže t.j. Serijska številka, Servisna številka(Product ID) amortizacijska doba. Naknadno se potem izpolni stanje kosa opreme ali je v uporabi ali v skladišču ali je bil upokojen(zlomljen, pokvarjen, prodan).  Ob izteku amortizacijske dobe se adminu pošlje obvestilo na mail oz v nek predal sporočil da se izdelku izteče življenska doba (recimo 1 leto prej 1 mesec prej in 1 teden prej). Ob skeniranju QR kode se uporabniku na napravi izpiše izkaznica izdelka. (Na izkaznici je možno dodeliti stanje ali je v uporabi ali skladišču). V bazi je seznam zaposlenih katerim se lahko dodeli lastništvo opreme.


React Native  <br />
Generirat je treba QR nalepke z izkaznico asseta  <br />
https://github.com/microsoft/InQRy predlog za generiranje QR kod kjer se potem shranijo informcije (pyhton)  <br />
WebApp za vodenje teh assetov potem v React Native backend pa z nodeom/pyhton?  <br />
Neka baza uporabnikov oz zaposlenih. Rešitev je namenjena izključno za admine. <br />
Baza vseh assetov- Asset rabi Model(svoja entiteta?) Serijska številka, številka inventarja(productId), amortizacijska doba. 
<br />
Možnost vnosa asseta ob nabavi. Ko se asset upokoji se izbriše iz baze. <br />




