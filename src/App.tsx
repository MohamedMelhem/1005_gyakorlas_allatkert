import { AllatCard } from "./components/AllatCard";
import { AllatokTabla } from "./components/AllatokTabla";
import { Bevezeto } from "./components/Bevezeto";
import { Erdemes } from "./components/Erdemes";
import { Fejlec } from "./components/Fejlec";
import { KisCard1 } from "./components/KisCard1";
import { KisCard2 } from "./components/KisCard2";
import { KisCard3 } from "./components/KisCard3";
import { Lablec } from "./components/Lablec";

function App() {
  const bevezeto =
    "Az állatkertekben különböző földrészekről származó állatokkal találkozhatunk. " +
    "Az állatokat fajuknak és természetes élőhelyüknek megfelelő körülmények között gondozzák. " +
    "Az állatok életkora, testsúlya és táplálkozása fajonként eltérő.";

  return (
    <main className="container">
      <div className="mt-2 mb-1 rounded bg-primary p-5 text-white">
        <Fejlec
          cim="REACT gyakorlás: Komponensekre bontás"
          alcim="Téma: Állatkert lakói"
        />
      </div>

      <div className="row mb-2">
        <Bevezeto cim="Mit érdemes tudni az állatkerti állatokról?" content={bevezeto} />
      </div>

      <div className="row mb-2">
        <KisCard1
          cim="Élőhelyek"
          elemek={[
            "Afrikai szavanna",
            "Ázsiai esőerdő",
            "Dél-amerikai őserdő",
            "Sarki vidék",
            "Ausztráliai területek",
          ]}
        />
        <KisCard2
          cim="Népszerű állatok"
          elemek={["Oroszlán", "Elefánt", "Zsiráf", "Panda", "Pingvin"]}
        />
        <KisCard3
          cim="Táplálkozás"
          elemek={[
            "Növényevő",
            "Húsevő",
            "Mindenevő",
            "Gyümölcsevő",
            "Rovarokkal táplálkozó",
          ]}
        />
      </div>

      <AllatokTabla
        cim="Az állatkert néhány lakója"
        fejlec={["Név", "Életkor", "Súly", "Veszélyeztetett?", "Kedvenc ételek"]}
        allatok={[
          ["Szimba", "8 év", "190 kg", "Igen", "Marhahús, csirkehús"],
          ["Lili", "12 év", "3200 kg", "Nem", "Fű, levelek, gyümölcsök"],
          ["Beni", "6 év", "850 kg", "Igen", "Levelek, ágak"],
          ["Pötyi", "5 év", "95 kg", "Igen", "Bambusz, sárgarépa"],
          ["Csőrike", "4 év", "28 kg", "Nem", "Hal, krill"],
        ]}
      />

      <div className="row mb-1">
        <AllatCard
          faj="Oroszlán"
          nev="Szimba"
          kor={8}
          suly="190 kg"
          veszelyeztetett="Igen"
          etelek="marhahús, csirkehús"
        />
        <AllatCard
          faj="Elefánt"
          nev="Lili"
          kor={12}
          suly="3200 kg"
          veszelyeztetett="Nem"
          etelek="fű, levelek, gyümölcsök"
        />
        <AllatCard
          faj="Zsiráf"
          nev="Beni"
          kor={6}
          suly="850 kg"
          veszelyeztetett="Igen"
          etelek="levelek, ágak"
        />
        <AllatCard
          faj="Panda"
          nev="Pötyi"
          kor={5}
          suly="95 kg"
          veszelyeztetett="Igen"
          etelek="bambusz, sárgarépa"
        />
        <AllatCard
          faj="Pingvin"
          nev="Csőrike"
          kor={4}
          suly="28 kg"
          veszelyeztetett="Nem"
          etelek="hal, krill"
        />
      </div>

      <Erdemes
        cim="Amit érdemes megjegyezni"
        erdemes1="Minden állatfajnak sajátos táplálkozási igényei vannak."
        erdemes2="Az állatok életkora és testsúlya fajonként, illetve egyedenként eltérhet."
        erdemes3="A veszélyeztetett fajok védelme fontos természetvédelmi feladat."
        erdemes4="Az állatkertekben az állatok gondozása mellett az ismeretterjesztés is fontos."
        erdemes5="Az állatok adatai szöveget, számot és más típusú adatokat is tartalmazhatnak."
      />

      <div className="row">
        <Lablec author="Melhem Mohamed" date="2026.10.04." />
      </div>
    </main>
  );
}

export default App;
