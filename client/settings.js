export const API_URL =
  // import.meta.env.MODE. dette er en variable der fortæller os hvilen "mode applicationen kører i"
  import.meta.env.MODE === "development"
    ? //her viser den development, hvilket betyder at vi arbejder med lokalt. på vores egen maskine, og stadig igang med development.
      //hvis den er i ligemed productiom betyder det også, at koden er helt færdig og er klar til at blive brugt.
      import.meta.env.VITE_DEV_API_BASE_URL
    : import.meta.env.VITE_PROD_API_BASE_URL;
//"if-else" Operatoren (? :):
//hvis import.meta.env.MODE er "development" bruges værdien af import.meta.env.VITE_DEV_API_BASE_URL eller bruges import.meta.env.VITE_PROD_API_BASE_URL.

//nu er den på development så den bruger vores locale server localhost

//grunden til vi har brugt denne tilgang er:
//Dette gør det nemt at have to forskellige miljøer (udvikling og produktion) og sørger for, at appen altid bruger den rigtige server, uanset hvor den kører
