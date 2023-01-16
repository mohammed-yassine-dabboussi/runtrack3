function jourtravaille()
{
    let dateForm=document.getElementById("dateForm").value;
    let date = new Date(dateForm);
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();
    let jourSemaine = date.getDay();

    if (mois === 1 && jour === 1) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: Jour de l'an`);
      } else if (mois === 4 && jour === 13) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: Pâques`);
      } else if (mois === 5 && jour === 1) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: Fête du travail`);
      } else if (mois === 5 && jour === 8) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: Victoire des alliées`);
      } else if (mois === 5 && jour === 21) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: L'Ascension`);
      } else if (mois === 6 && jour === 1) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: Pentecôte`);
      } else if (mois === 7 && jour === 14) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: Prise de la Bastille`);
      } else if (mois === 8 && jour === 15) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: L'Assomption`);
      } else if (mois === 11 && jour === 1) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: La Toussaint`);
      } else if (mois === 11 && jour === 11) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: L'Armistice`);
      } else if (mois === 12 && jour === 25) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié: Noël`);
      }else if (jourSemaine==6 || jourSemaine==0){
        console.log(`Non, ${jour}/${mois}/${annee} est un weekend`);
        }else {
        console.log(`Oui, ${jour}/${mois}/${annee} est un jour travaillé`);
      }
    
}