/*CREATE DATABASE IF NOT EXISTS Znamenitosti character set utf8 collate utf8_slovenian_ci;*/

DROP TABLE IF exists ZaposlenIma;
DROP TABLE IF exists Oprema;
DROP TABLE IF exists Model;
DROP TABLE IF exists Stanje;
DROP TABLE IF exists Zaposleni;
DROP TABLE IF exists Oddelek;

CREATE TABLE Oddelek(
idOddelek integer primary key AUTO_INCREMENT,
naziv VARCHAR(45)
);

CREATE TABLE Zaposleni(
idZaposleni integer primary key AUTO_INCREMENT,
ime VARCHAR(45) NOT NULL,
priimek VARCHAR(45) NOT NULL,
oddelek_idOddelek integer 
);

alter table Zaposleni add constraint TK_ID_idOddelek foreign key (oddelek_idOddelek)  references Oddelek(idOddelek);

CREATE TABLE Stanje(
idStanje integer primary key AUTO_INCREMENT,
nazivStanja VARCHAR (45) NOT NULL
);

CREATE TABLE Model(
idModel integer primary key AUTO_INCREMENT,
nazivStanja VARCHAR(45) NOT NULL
);

CREATE TABLE Oprema(
idOprema integer primary key AUTO_INCREMENT,
serijskaStevilka VARCHAR(45),
naziv VARCHAR(45) NOT NULL,
productID integer NOT NULL,
amortizacijskaDoba DATE NOT NULL,
Stanje_idStanje integer,
Model_idModel integer
);
alter table Oprema add constraint TK_ID_stanje foreign key (Stanje_idStanje) references Stanje(idStanje);
alter table Oprema add constraint TK_ID_model foreign key (Model_idModel) references Model(idModel);

CREATE TABLE ZaposlenIma(
id integer primary key AUTO_INCREMENT,
Zaposleni_idzaposleni integer,
Oprema_idOprema integer,
datumZadnjeSpremembe DATE NOT NULL
);

alter table ZaposlenIma add constraint TK_ID_zaposleni foreign key (Zaposleni_idzaposleni) references Zaposleni(idZaposleni);
alter table ZaposlenIma add constraint TK_ID_serijskaStevilka foreign key (Oprema_idOprema) references Oprema(idOprema); 
