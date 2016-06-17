# ASCI lustrum coding battle

In de repo vind je code templates die je kunt gebruiken om snel van start te gaan tijdens de **experty coding** battle op 21 juni.

## Hoe werkt het?

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
