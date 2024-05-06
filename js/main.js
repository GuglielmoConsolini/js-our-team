let contenitore = document.getElementById("box")
// Array di oggetti
let myTeam = [
{ name:"Wayne Barnett" , ruolo:"Founder & CEO" , foto:"wayne-barnett-founder-ceo.jpg"},
{ name:"Angela Caroll" , ruolo:"Chief Editor" , foto:"angela-caroll-chief-editor.jpg"},
{ name: "Walter Gordon" , ruolo:"Office Manager" , foto:"walter-gordon-office-manager.jpg"},
{ name: "Angela Lopez" , ruolo:"Social Media Manager" , foto:"angela-lopez-social-media-manager.jpg"},
{ name: "Scott Estrada" , ruolo:"Developer" , foto:"scott-estrada-developer.jpg"},
{ name: "Barbara Ramos" , ruolo:"Graphic Designer" , foto:"barbara-ramos-graphic-designer.jpg"}
];
console.log(myTeam)

// ciclo per stampare in console le proprietà degli oggetti dentro l'array
for(let i = 0 ; i < myTeam.length ; i++){

   const membroTeam = myTeam[i];
   const membroHtml = creaMembroTeamHTML(myTeam[i])
   console.log("Stampo l'oggetto: " + membroTeam[i])
   console.log("Stampo il nome e il ruolo: " + membroTeam.name + " ," + membroTeam.ruolo)
   contenitore.innerHTML += membroHtml;

}

// Definisci la funzione che restituirà una stringa di HTML per un membro del team
function creaMembroTeamHTML(member) {
    return `
        <div class="team-member">
            <p>Nome: ${member.name}</p>
            <p>Ruolo: ${member.ruolo}</p>
            <img src="./img/${member.foto}" alt="${member.name}">
        </div>
    `;
}







