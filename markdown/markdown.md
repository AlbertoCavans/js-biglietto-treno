# Calcolare il prezzo del biglietto di un treno

## Obiettivo

L'esercizio consiste nel preparare un programma che chieda all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

## Svolgimento

- Prepararare una prompt che chieda il n.o di km all'utente (la prompt dovrà essere dentro un parseInt così da avere un number)
  - Preparare console.log per stampare il n.o di km chiesti all'utente in modo da verificare che la prompt sia scritta bene
  - Eseguire il controllo
    - SE il valore viene stampato correttamente proseguire
    - ALTRIMENTI trovare l'errore, correggerlo e proseguire
- Prepararare una prompt che chieda il n.o di anni dell'utente
  - Preparare console.log per stampare il n.o di km chiesti all'utente in modo da verificare che la prompt sia scritta bene
  - Eseguire il controllo
    - SE il valore viene stampato correttamente proseguire
    - ALTRIMENTI trovare l'errore, correggerlo e proseguire
- Calcolare il prezzo del biglietto basato solo sui km (costo: 0,21€ per ogni km)
  - Preparare console.log per stampare il prezzo del biglietto basato solo sui km in modo da verificare che l'operazione matematica sia scritta bene
  - Eseguire il controllo
    - SE il valore viene stampato correttamente proseguire
    - ALTRIMENTI trovare l'errore, correggerlo e proseguire
- Inserire una istruzione condizionale con if, else if ed else dove:
  - SE l'utente ha meno di 18 anni ALLORA il prezzo viene scontato del 20%
  - ALTRIMENTI SE l'utente ha 18 O più anni, ma 65 o meno anni il prezzo non viene scontato
  - ALTRIMENTI nel caso in cui l'utente abbia più di 65 anni il prezzo viene scontato del 40%
    - Preparare console.log per verificare che il codice funzioni
    - Eseguire i controlli nei 3 casi
      - SE il valore viene stampato correttamente nei 3 casi proseguire
      - ALTRIMENTI trovare l'errore, correggerlo e proseguire
- Preparo un'operazione matematica per calcolare il prezzo tenendo conto degli sconti a seconda delle età
  - Preparare console.log per verificare che il codice funzioni
  - Eseguire il controllo
    - SE il valore viene stampato correttamente proseguire
    - ALTRIMENTI trovare l'errore, correggerlo e proseguire
- Procedere a stampare il prezzo finale direttamente sulla pagina
  - Eseguire il controllo
    - SE il valore viene stampato correttamente proseguire
    - ALTRIMENTI trovare l'errore, correggerlo e proseguire
