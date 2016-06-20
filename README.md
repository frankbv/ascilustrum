# ASCI lustrum coding battle

Dinsdag 21 juni is het zover, en zal de **experty coding battle** ter gelegenheid van het ASCI lustrum plaatsvinden op het hoofdkantoor van experty.
De deelnemers zullen in twee groepen van 25 tot 30 man aanwezig zijn, en in teams van 2 zo snel mogelijk programmeeropdrachten oplossen.

## Algemene info

### Schema

De eerste groep wordt om 13:00 ontvangen, en de tweede groep om 15:00. Elke groep is 2 uur lang aanwezig.
Tijdens de eerste 20 minuten vindt de ontvangst plaats en kunnen de teams zich voorbereiden op de eerste opdracht. Hierna zal de 
eerste opdracht worden uitgegeven, en elke 25 minuten nog een opdracht, tot alle vier de opdrachten zijn gepubliceerd. Als een team
elke opdracht wil oplossen is er dus 25 minuten per opdracht beschikbaar.

Zodra het tweede team klaar is om 17:00 zal het eerste team ook weer arriveren, en hierna zal de prijsuitreiking plaatsvinden. Uiteindelijk
kan er nog nagekletst- en geborreld worden tot 18:00.

### Puntentelling

Om te winnen moet een team de meeste punten verdienen. Punten worden verdiend door opdrachten successvol op te lossen.
Per opdracht is het aantal te behalen punten echter afhankelijk van hoe snel de opdracht wordt opgelost, want wie het eerst komt, wie de meeste punten krijgt.

- Eerste team met correcte oplossing: **10 punten**
- Tweede team met correcte oplossing: **8 punten****
- Derde team met correcte oplossing: **6 punten**
- Elk volgend team met correcte oplossing: **5 punten**

Daarnaast zijn er voor de derde opdracht **5 bonuspunten** te verdienen indien de oplossing de moeilijkste input kan verwerken, ongeacht wanneer de oplossing wordt ingediend.

### Beoordeling
Elke opdracht wordt aangeleverd met 1 voorbeeldinput en het verwachte resultaat van deze input. De overige inputs zitten in bestanden die met een wachtwoord
beveiligd zijn, en alleen de nakijkers aan de bar kunnen deze ontsleutelen. Als aan de bar blijkt dat de oplossing voor elke input de correcte output geeft
worden punten uitgedeeld, zo niet, dan moet eerst de oplossing worden verbeterd. Als uitzondering hierop is de bonus-input van opdracht drie, maar deze 
zal bij een naïeve oplossing hooguit te lang duren om te berekenen. Oplossingen dienen binnen maximaal 10 seconden berekend te worden.

## Technische details

In deze repo vind je code templates die je kunt gebruiken om snel van start te gaan.

Input voor de opdrachten dient aan de scripts te worden gevoerd middels **stdin** (standard input). 
Voor sommige opdrachten zal de input gemakkelijk zelf in te typen zijn, maar voor anderen is de input groot en is het handiger
om dit geautomatiseerd in te lezen.

Door stdin te gebruiken kan gemakkelijk input data worden gedownload en vervolgens ge-piped richting je script.

**cURL - Linux**
```
curl -s https://pizza-expert.nl/input/voorbeeld/1 | ./oplossing1.py
```

**Wget - Linux**
```
wget -qO- https://pizza-expert.nl/input/voorbeeld/1 | ./oplossing1.py
```

## Execute rechten

Vergeet niet om je scripts execute rechten te geven, anders gaan bovenstaande voorbeelden niet werken. Als je dat niet wilt kan je ook
altijd je runtime naar keuze zelf gebruiken om het script uit te voeren:

```
curl -s https://pizza-expert.nl/input/voorbeeld/1 | python3 oplossing1.py
```
