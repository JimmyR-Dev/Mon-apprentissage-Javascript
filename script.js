//ATTENTION ! CHOIX D ECRITURE DE CODE : SOIT JE MET UN POINT VIRGULE POUR MARQUER LA FIN DE LA LIGNE DE CODE, SOIT JE SAUTE UNE LIGNE
//CE QUI VAUT UN POINT VIRGULE

document.write("Hello world")
// En route pour devenir dev !
/* Passons aux choses sérieuses ! */

console.clear() //efface le contenu de la console
console.error("Mon erreur est créee") //affiche une erreur dans le log

let maVariable = 18
let maphrase = `Aujourd'hui nous avons ${maVariable} personnes qui sont venus. ` + "Aujourd'hui nous avons " + maVariable + " chats qui sont venu" // Pour insérer une variable dans un string backstick `` + ${}
console.log(maphrase) //deux manière de faire pour insérer une variable dans du texte

let maConcatenation = `Prix ${5 + 4}`
console.log(maConcatenation) //permet directement d'afficher le résultat d'un calcule

//-----------------------------DECLARER UNE VARIABLE--------------------------------------
console.error("déclarer une variable")


let monAge = 31
console.log(monAge)

//----------------------------------------------------------------------------------------

//----------------------------OPERATEURS ET OPERATEURS D'AFFECTATION----------------------
console.error("Operateurs et operateurs d'affectations")
//---------


let nbreboules = 50 
nbreboules += 100 // le "+""= est un opérateur d'affectation, cela évite d'écrire deux fois la variable ex: nbreboules = nbreboules + 100 
console.log(nbreboules)

let messageBienvenue = "Bienvenue, "
messageBienvenue += "Jimmy"
console.log(messageBienvenue) // j'obtiens Bienvenue, Jimmy

let trueNumber = "150"
console.log(Number(trueNumber) + 50) // Number permet de préciser au navigateur que nous voulons réellement que les chiffres indiquée en string dans les parenthèses qu'ils soient des chiffre et pas un string
//--------

//--------
let totalLivres = 500
totalLivres += 50  // Dans le futur par ex pour une variable qui compte des visites je peux mettre la variable qui compte les visites à la place de 50 
totalLivres -= 10
totalLivres += 5

console.log(totalLivres)

let affichageTotalLivres = "Notre bibliothéque posséde " 
affichageTotalLivres += totalLivres      // J'ajoute (concaténe) la valeur de totalLivres à affichageTotalLivres 
affichageTotalLivres += " livres"        // Je concaténe "Livres"

console.log(affichageTotalLivres)        // Cela donne Notre bibliothéque posséde 545 livres
//-------

//----------------------------------------------------------------------------------------

//---------------------------------LES OBJETS---------------------------------------------
console.error("Les objets")
//-------



let monObjet = {
    nom: "Ramos", // nom est une propriété, Ramos une valeur
    prenom: "Jimmy",
    age: 32,
    origine: "France"
}

console.log(monObjet.nom) // affiche Ramos

monObjet.couleurPrefere = "Rose"  //ajoute la propriété couleurPreferer et sa valeur à mon objet dans la variable monObjet
console.log(monObjet.origine)
console.log(monObjet.couleurPrefere)

//----------------------------------------------------------------------------------------

//--------------------------------LES TABLEAUX--------------------------------------------
console.error("Les tableaux")
//-------

const monTableau = ["titre", "durée", "langue"] // Mon tableau avec 4 valeurs, peut aussi stocker des variables
console.log(monTableau.length) // .length affiche combien il y'a d'éléments dans mon tableau et c'est une "propriété"

monTableau.push("type")      // .push va ajouter la valeur type au tableau en dernière place
console.log(monTableau)         // monTableau vaut ["titre", "durée", "langue", "type"]

monTableau.pop()            // .pop supprime la derniere valeur du tableau
console.log(monTableau)

// Tout ces mots clé comme .pop ou .push sont des "méthodes"

console.log(monTableau[2]) // mon tableau part de 0, 2 correspond donc à langue, et s'affiche donc dans la console

let langueFilm = monTableau[2]
console.log(langueFilm)

monTableau[1] = "temps"  // j'ai remplacé durée par temps
console.log(monTableau) 

//------Copie par valeur et par référence

const copieParValeur1 = "ma donnée"
const copieParValeur2 = copieParValeur1 // Cela copie la valeur de la variable 1 vers la 2 et je peux modifier la 1 sans affecter la 2, c'est une copie par valeur, (type basique et donc booleen number ou string)

const copieParReference1 = ["Miel", "Citron", "Orange"]
const copieParReference2 = copieParReference1 // Dans le cas des objets et tableaux (type complexe) si je modifie un élément du tableau, cela affectera les deux variables, cest une copie par référence
const copieParReference3 = [...copieParReference1] // les "..." va copier ce qui se trouve dans la valeur 1 mais va rendre le tableau 3 indépendant, je pourrais donc modifier le tableau 3 plus tard sans affecter l'autre tableau
copieParReference2.push("Fraise")
console.log(copieParReference1)
console.log(copieParReference3)

//------------

//-----------------------------LES CONDITIONS---------------------------------------
console.error("Les conditions")
//-----
let revenueClient = 9
const prixSaucisson = 3.75
const prixPizza = 10

if (revenueClient >= prixPizza) {
    console.log("j'achéte la pizza")
} else {
    console.log("j'achéte le saucisson")
}

//-----

const maVraiVariable = false 

//si rien est spécifié la variable se compare toujours à true (maVraiVariable == true)
if (maVraiVariable) {
    console.log("Succés de la variable")
} else {
    console.log("echec de la variable")
}

if (!maVraiVariable) { // le ! dans le test précise "si maVraiVariable est false alors : résultat else : résultat
    console.log("Succés de la variable")
} else {
    console.log("echec de la variable")
}
//-----

/*
const motApplication = "Bonjour"
let maQuestion = prompt("Saisissez le mot : " + motApplication)

if (maQuestion === motApplication) {
    alert("Félicitation, vous avez bien répondu !")
} else {
    alert("Echec, le mot ne correspond pas !")
}
*/

// Un popup avec prompt s'ouvre si l'utilisateur répond bonjour, la variable bonjour est stocké dans maQuestion, et correspond donc à motApplication

const motApplication = "Bonjour"
let motUtilisateur = prompt("Saisissez le mot : " + motApplication )


switch (motUtilisateur) {
    case motApplication: 
        console.log("Bravo vous avez bien répondu !")
        break
    case "Connard":
        console.log("Calme toi boloss !")
        break
    case "Bonne nuit":
        console.log("Hey il ne fait pas encore nuit !")
        break
    case "Aurevoir":
        console.log("C'est ça dégage !")
        break
    default:
        console.log("Vous avez fait une erreur !")

    
}

//-----

const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let entreeUtilisateur = prompt("Veuillez entrer le mot : " + listeMots[0])

if (entreeUtilisateur === listeMots[0]) {
    score++ // ++i va incrémenter avant le résultat i++ l'incrémentera aprés
} else {
    console.log("Mauvaise réponse")
}

console.log(listeMots[score])

//Je demande à ce que le mot que l'utilisateur va entrer soit équivalent au 1er mot du tableau, si c'est correct j'incrémente de 1, sinon mauvaise réponse
//-----

//--------------------------------LES BOUCLES-------------------------------
console.error("Les boucles")
//------
//For pour faire tourner un element un certains nombres de fois lorsque l'ont SAIT quand la boucle doit s'arreter, 
//while pour boucler un element jusqu'à ce que l'itération ne soit plus vrai, utile lorsque l'on ne sait pas quand la boucle doit s'arreter

for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
    console.log(compteur)
}

//ou la même chose en plus simple

for (let compteur = 0; compteur < 3; compteur++) {
    console.log(compteur)
}

//------

let myArray = ["Michel", "Jimmy", "Richard", "Fabrice"] 

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
} 
// j'initialise un compteur à 0 (i = indice), je lui dis : temps que i est inférieur aux nombre d'éléments du tableau continue d'incrémenter i, ce qui a
// pour effet de faire monter i, je place i entre crochets de ma variabe myArray pour lui ajouter l'incrémentation et parcourir le tableau

//-----

/* const maListMots = ['Cachalot', 'Pétunia', 'Serviette']

for (let i = 0; i < maListMots.length; i++) {
    let motUtilisateur = prompt('Entrez le mot : ' + maListMots[i])
    if (motUtilisateur === maListMots[i]) {
        score++
    }
    
}

console.log("Votre score est de " + score + " sur 3")

do while permet d'executer au moins une fois la boucle avant de vérifier si il faut la répéter
*/

// Fais passer tout les éléments du tableau via "l'index"
const compteurIn = ["Coca", "Orange", "Thé"]
for (let i in compteurIn) {
    console.log(compteurIn[i])
}

// la même chose avec un objet, affichera les clés de l'objet
const compteurObject = {
    nom: "Jimmy",
    age: 33,
    pays: "France"
}

for (let i in compteurObject) {
    console.log(compteurObject[i])
}

// of va nous donner les "valeurs" du tableau directement
const compteurOf = ["Pâtes", "Riz", "Purée"]
for (let compteursOf of compteurOf) {
    console.log(compteursOf)
}
// ATTENTION, of ne fonctionne pas avec les objets, car of fonctionne que avec ce qui est itérable.
//-----

let i = 0
while (i < 2) {
    console.log(i)
    i++ 
}
// ici j'initialise la variable i à 0 AVANT la boucle, je met simplement la condition d'arret apres while (TANT QUE), puis l'action à exécuter,
// cela va afficher 4 fois dans la console l'incrémentation mis à jour

//------------------------------LES FONCTIONS---------------------------------
console.error('Les fonctions')
//--------

//ATTENTION, les variables déclarées dans une fonction ont une portée local, celles en dehors globales, celles locales ne s'applique qu'à la
//fonction

function monScore(score, total) {
    let message = "Bravo, vous avez obtenu un total de " + score + " sur " + total + "."
    return message
}

console.log(monScore(7,  10)) // J'appelle la fonction dans console.log // Peut aussi utiliser un .length d'une variable dans le paramétre
// ou 
let retourFonction = monScore(5, 10)
console.log(retourFonction) // la même méthode sauf que j'ai stocké la fonction dans une variable, et j'appelle la variable au lieu de la fonction

/* - Ici je déclare ma fonction monScore puis ses paramétres score et total.
   - Entre accolade l'action à réaliser, je déclare ma variable et intégre les paramètres de ma fonction dans mon message.
   - Je retourne un résultat (return), ici le contenu de la variable message que je viens de créer. NDLR: cette variable aura une portée locale (uniquement dans la fonction)
   - Dans mon console.log j'appelle ma fonction en précisant entre parenthése quel sont les valeurs de score et total.
   - Ce qui aura pour effet de remplacer le score, et total par la valeur que j'ai entré, et on obtiendra ici :
     "Bravo, vous avez obtenu un total de 7 sur 10." */

//-----

function prixTotal(prixHT, taxe) {
    return prixHT * taxe / 100 // sensé calculer le prix total avec taxes
}
    
console.log(prixTotal(100, 20)) // Probléme pour intégrer un pourcentage à 20

//-----

const isPair = function (a, cb) {
    if (a % 2 === 0) {
        cb(a)
    }
}

isPair(2, function () {
    console.log('mon nombre est pair')
})
// Ici je passe une fonction dans mon 2éme paramètre un 'Callback' , ce qui permet d'appeller cette fonction si la condition est vraie
//-----

//-------------------------ELEMENT DU DOM-------------------------
console.error("Elements du DOM")
//------           VOIR AUSSI LE DOSSIER 'MON SITE WEB' EN COMPLEMENT

//Pour récupérer une propriété dans un element du DOM cela fonctionne comme les objets javascript par ex :

let myHtmlElement = document.querySelector("body")
myHtmlElement.autofocus = true // Passera la propriété de l'élément body autofocus sur true au lieu de par défaut false
console.log(myHtmlElement.autofocus) // Affichera la valeur de la propriété autofocus de l'élément html body


//-----

let mesHtmlElements = document.querySelectorAll(".mes-elements p")
console.log(mesHtmlElements)

for (let i = 0; i < mesHtmlElements.length; i++) {
    console.log(mesHtmlElements[i]) //Va afficher et parcourir tout les <p> dans la console, les affichera directement avec [i] 
}

//--------

let rubilia = document.querySelector('div img')
rubilia.setAttribute('class', 'Taxia')    //setAttribute permet de remplacer la valeur d'un attribut html
rubilia.setAttribute('src', '../HTML-CSS/images/8sx4h4mr1mqa1.gif') // va modifier l'image vu que src a été changé
 // Un raccourci fonctionne aussi par ex : rubilia.src = 'le lien vers l'image', cela fonctionne pour les attributs de base

let mesDivs = document.querySelectorAll('div') //je séléctionne toutes mes <div>
console.log(mesDivs)

for (const mesDiv of mesDivs) {
    mesDiv.classList.remove('ma-classe')
    mesDiv.classList.add('ma-nouvelle-classe')
}
// Avec cette méthode je fais passer à toute mes <div> le remplacement du nom de la nouvelle classe grâce à la boucle for

//---------

const titre = document.querySelector('.mon-titre')
const liens = document.querySelectorAll('a') // Lorsque querySelectorAll est utilisé je peux cibler mon élément avec par ex [0],[1] etc
                                            // voir ci-dessous


liens[0].addEventListener('click', function(event) {
    
    titre.classList.add('alt-titre')
    event.preventDefault()
})

liens[1].addEventListener('click', function(event) {
    
    titre.classList.remove('alt-titre')
    event.preventDefault()
})
titre.getElementsByClassName
liens[2].addEventListener('click', function(event) {
    
    titre.classList.toggle('alt-titre')
    event.preventDefault()
})
// cette technique va permettre de remplacer une classe par une autre et alterner entre deux propriété CSS et changer le style par exemple
// en cliquant sur un lien cela changera la couleur du titre car cela est passer à une autre class CSS

// A NOTER, JE PEUX DEFINIR PLUSIEURS CLASS DIRECTEMENT DANS HTML SIMPLEMENT AVEC UN ESPACE ENTRE EUX ET LES UTILISER POUR AJOUTER PLUSIEURS
// ELEMENTS DE STYLE CSS AVEC DIFFERENTES PROPRIETES CSS

//------
let elementParent = document.querySelector('body') 
let newElement = document.createElement('span') // Le but est de créer une nouvelle balise pour l'insérer dans l'arbre du DOM


elementParent.appendChild(newElement) //appenchild va ajouter la balise span créer plus haut à la balise enfant body
newElement.innerHTML = 'Ceci est un test avec le span'


//autre méthode "L'interpolation) (aussi plus sécurisé)

const monMain = document.createElement('main')
elementParent.appendChild(monMain)


const monTitre = "Ceci est mon titre nouvellement creer"
const monParagraphe = "Cela est mon paragraphe nouvellement creer et je test la fonctionnalité"
let div = `<div>
                <h2>${monTitre}</h2>
                <p>${monParagraphe}</p>
            </div>
            `

monMain.innerHTML = div
//Attention ! Va remplacer tout contenu de la balise ciblée pour la remplacée par le contenu de la variable div
// il est préférable de placer ce type de contenu dans une balise nouvellement créer avec createElement

//-----------

const button = document.querySelector('.button')
const button1 = document.querySelector('.button1')

button.addEventListener('click', function () {
    console.log("Vous avez bien cliqué sur le boutton")
}) // j'envois un message à la console à chaque clique de mon bouton

button1.addEventListener('click', function (event) {
    console.log(event) // Va afficher l'evenement dans la console
})

//---------

const champ = document.getElementById('champ')

champ.addEventListener('keypress', (event) => { // event va permettre de renvoyer une information lié à l'évenement lui même
    console.log(event.key) // event.key est utilisé ici elle permettra de renvoyer dans la console ce que l'utilisateur à tapé
})

/*Il existe beaucoup de propriété lié à event comme par ex : 
- event.key : qui renvoi ce que l'utilisateur à tapé l'evenement est déclenché
- event.target : qui renvoi l'element html qui a été déclenché l'evenement est déclenché
- event.clientX : qui renvoi les coordonnés de la souris lorsque l'evenement est déclenché
il en existe bien d'autres
*/

//-----

const listButtons = document.querySelectorAll('.list-buttons')

for (i = 0; i < listButtons.length; i++) { // ici je creer une boucle pour faire passer tout les élements qui ont la class list-buttons
    const allButtons = listButtons[i]

    allButtons.addEventListener('click', (event) => {
        eventButton = event.target  // renvoi l'element html qui à déclencher l'élément, ici la propriété de eventButton (qui est className)
        console.log(` J'ai cliqué sur mon bouton : ${eventButton.className}`) 

    })
}

//------------------------------------Gerer les formulaires avec Javascript------------------------------
console.error('Gerer les formulaires avec Javascript')
//--------

const myChamp = document.getElementById('champ')
console.log(myChamp.value) // Je récupére la valeur que l'utilisateur tape et l'affiche en console

myChamp.addEventListener('change', () => {
    console.log(myChamp.value)
}) // Pour que l'élement change quand la saisie est finie, cela change dynamiquement

//-----

const checkboxFrites = document.getElementById('frites')
let valueFrites = checkboxFrites.checked
console.log(valueFrites)

//-----

const mesRadios = document.querySelectorAll('input[name="color"]')

for (let i = 0; i < mesRadios.length; i++) { //je fais une boucle pour parcourir toutes les cases radios disponible
    if (mesRadios[i].checked) { 
        console.log(mesRadios[i].value)
    } //je lui dis si la case est checked (cochée) attribut sa valeur à la variable couleur
      //puis j'affiche la valeur dans la console
}

//---------------------------METTRE EN PLACE DES REGLES DE VALIDATIONS---------------------
console.error('Mettre en place des régles de validations')
//------

const formTrim = document.querySelector('.test-trim')
const inputTrim = document.getElementById('test-trim')


formTrim.addEventListener('submit', (event) => {
    event.preventDefault()
    verifierChamp(inputTrim)
    
})

inputTrim.addEventListener('input', (event) => { //input ecoute l'evenement à chaques lettres tapé
    const champTrim = event.target.value.trim() //trim va faire en sorte que tout les espaces dans le champ soit supprimé, ce qui fait en sorte que
    //si l'utilisateur met un espace dans le formulaire il ne sera pas pris en compte
    if (champTrim === "") {
         //change l'id la valeur de id par error
        console.log("Le champ n'est pas rempli !")
    } else {
        
        console.log("Le champ est rempli !")
        
    }
    
})

//le but est d'ajouter un champ rouge en cas d'erreur : 

function verifierChamp(champs) { // cette fonction va permettre d'éviter de recopier du code à chaque fois que c'est nécéssaire
    if (champs.value === "") {
        champs.classList.add("error")
    } else {
        champs.classList.remove("error")
    }
} //si la valeur de input est vide change la classe vers ma classe css error, ce qui donnera un font rouge au champ, j'ajoute la fonction dans
//l'écouteur d'événement submit pour que cette régle se déclenche à l'envoi du formulaire (bouton valider)

//---------

//Les new RegExp("^[a-z]+$")
/* - ^  : signifie que la chaîne doit commencer par ce qui suit.
   - [a-z]  : signifie que la chaîne doit avoir des lettres comprises entre a et z. 
   - Le  +  signifie qu’il faut au minimum une seule lettre entre a et z. 
   - $  : signifie que la chaîne doit finir par ce qui précède. */
    
   //ex de ce qu'on a besoin sur une adresse mail : [a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+ i jimmyd@live.com
   /* - D'abord les premiers crochets pour le nom, des lettres a à z 0 à 9 point underscore et tiret
      - Ensuite l'arobase +@ car le nom est suivi d'un arobase
      - Ensuite le nom de domaine, a àz 0 à 9 . _ - 
      - Ensuite le point donc +/. car le domaine est suivi d'un point
      - Puis le l'extension com [a-z0-9._-] comme le premier */
        // Attention de bien indiqué le double backslash pour échapé un backslash et ajouter le point

//---------------------------------Gestion des erreurs-----------------------------
console.error('Gestion des erreurs')
//---------
const variableErreur = document.getElementById('idnexistant') //cette id n'existe pas
if (variableErreur === null) {
    console.log("l'élément n'existe pas")
} else (console.log("Suite du traitement")) //Va renvoyer l'élément n'existe pas

//Dans ce code, l’instruction variableErreur !== null permet de tester si maVariable contient bien un élément récupéré avec getElementById.

//--------

try {
    let laVariable = document.getElementById("idInexistant") // cette id n'existe pas
    laVariable.createElement("div") // Cette syntaxe n'est pas la bonne
    // suite du traitement, essaye un morceau de code
} catch (error) {                                              // peu aussi ne pas mettre de parenthese et juste catch
    console.log("Il y a eu une erreur : " + error.message); //Attrape l'erreur si le code ne marche pas et lance le code attrapé dans catch
}                                           //error.message va afficher seulement l'erreur concerné dans le code et que le message

//--------

function testError() {
    const champError = document.getElementById('test-error')
    const buttonError = document.querySelector('.error-button')
    buttonError.addEventListener('click', (event) => {
        event.preventDefault()
    })

    if (champError.value == "") {
        throw new Error(`La valeur de ${champError.id} est vide`) //affiche une erreur que nous définissons nous même en la lançant si le code n'est pas bon
    }
}
try {
    testError()
} catch (erreur){
    console.log(erreur) //Va attrapé l'erreur, et préciser entre parenthése erreur(ou n'importe quel nom peu importe) et afficher l'erreur dans
}                       //throw, le script va continuer car il est attrapé.

console.log("L'erreur est attrapée !") //attention si le throw est lancé et que l'erreur n'est pas attrapée (catch), le script s'arrete quand même
                        // et ce console.log ne s'affiche pas car c'est la suite du code.

//--------