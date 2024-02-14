/**
 * Démo mon premier JavaScript
 * @author  Luca Vandoni
 * @version 2.0
 * @since   2024-02-07 (date de création)
 */

'use strict'; // Active le mode strict du JavaScript
//récupérer un objet.
const premierP =document.querySelector('p');
const premierUl = document.querySelector('ul');
const tousLesStrongs=document.querySelectorAll('strong');
console.log(premierP,premierUl,tousLesStrongs);

premierP.innerText= 'Bonjour le monde!';
premierUl.style.backgroundColor='yellow';

//parcours du tableau de tous les strongs
for (let i=0;i<tousLesStrongs.length;i++){
    tousLesStrongs[i].style.color='red';
    tousLesStrongs[i].innerText='TOTO';

}

// même chose avec for...of
for(let element of tousLesStrongs){
    element.style.textDecoration='overline';
}

/* gestion de la liste des courses*/
const txtArticles= document.querySelector('#article');
const btAjouter= document.querySelector('button.ajouter');
const ulListe= document.querySelector('ul.liste');

console.log(txtArticles,btAjouter,ulListe);

//fonction ajoute
function ajouter() {
    //alert(txtArticles.value);
    //ulListe.innerHTML+='<li>'+txtArticles.value+'</li>';
    ulListe.innerHTML+=`<li>${txtArticles.value}</li>`;
}

// pas de () sur la fonctions sinon ca la déclenche direct.
// exemple btAjouter.onclick = ajouter;
//btAjouter.addEventListener('click',ajouter);

btAjouter.addEventListener('click',function ajouter() {
    //alert(txtArticles.value);
    //ulListe.innerHTML+='<li>'+txtArticles.value+'</li>';
    if (txtArticles.value.length<1){
        alert('entrez un article!');
        return;
    }
    ulListe.innerHTML+=`<li>${txtArticles.value}</li>`;
    txtArticles.value='';
    txtArticles.focus();

});

//Ecoute les frappes clavier
txtArticles.addEventListener('keypress',(event)=>{
    console.log(event.key);

});
