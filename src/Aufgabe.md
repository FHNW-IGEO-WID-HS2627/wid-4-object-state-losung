# Übung WID 4 - Object State
Diese Übung soll verdeutlichen, wie Objekte in React "State" gespeichert werden können und was es dabei zu beachten gilt.

Die App.js Datei enthält Code für einen einfachen Login-Dialog. Jedes der beiden Eingabe-Felder hat einen zugehörigen useState-Hook, der die Eingabe speichert. Dazu liest der EventListener `onChange` das Event Objekt und übergibt den Wert (e.target.value) an die jeweilige setState Funktion. Zudem hat jedes Input-Element ein "value"-Attribut, welches die "State-Variable" liest. Zuletzt gibt es einen Button, der bei Klick beide State-Variablen verwendet und anzeigt.

## Aufgabe 1:
Schreibe den Code so um, dass nur ein (1) useState-Hook verwendet wird:
- Der Hook soll als "default Wert" ein Objekt mit den Eigenschaften "username" sowie "password" (als Schlüssel) haben. Die Werte sind jeweils leere Strings.
- Passe die State-Variablen im Code an - sie müssen nun auf die passende Eigenschaft / den Schlüssel des Objekts in State verweisen. 
```
// Reminder:

const meinObjekt = {meinSchluessel: "meinWert}

meinObjekt.meinSchluessel   // ergibt "mein Wert"

```
- Passe nun die setState Funktionen in den EventHandlern an, indem du diese ersetzt. Beachte dabei, dass du bei einer Passwort Eingabe den Username beibehalten möchtest und umgekehrt.

```
// Reminder:

const [meinObjektState, setMeinObjektState ] = useState({key1: value1, key2: value2})

setMeinObjektState({key1: someOtherValue1}) // Falsch: Damit verlierst du key2: value2
setMeinObjektState({...meinObjektState, key1: someOtherValue1}) // Richtig: Du kopierst erst das GANZE Objekt und ersetzt key1 mit dem neuen Wert.

```

## Aufgabe 2 (Optional, wenn du noch Zeit hast):
Der Button zeigt bei Klick eine Benachrichtigung an. Er könnte aber zusätzlich auch die Eingabefelder zurücksetzen und so eine weitere Eingabe ermöglichen.
- Nutze den gleichen useState Hook bzw. die gleiche setState-Funktion um das Objekt auf den Ausgangszustand zurückzusetzen. Dazu kannst du einfach ein Objekt mit den beiden Schlüsseln sowie leeren Strings als Werten an deine setState-Funktion übergeben.
- Falls du Pfeilfunktionen verwendest, beachte folgendes:

```
Reminder:

// Einzeilige Pfeilfunktion in Kurzsyntax:
const variante1 = () => console.log("irgendwas);

// Wenn du mehr als eine Anweisun in der Funktion hast und mehrere Zeilen benötigst, verwende {} und ggf. das return statement:
const variante2 = () => {
    // ganz viel Code;
    console.log("irgendwas);
    return "z.B. einen Wert"  // optional
}

```