MCTimer V1.0 jQuery plugin.
=======
<img border="0" height="320" src="http://1.bp.blogspot.com/-ylMTP2xVyFM/UcK9U9C4Q2I/AAAAAAAAAjQ/bFt36UAYDcc/s320/image001.png" width="312">

MCTimer plugin makes time insert in your forms more easier than before.
It will be served to the vast majority of your interactions.
the jQuery mctimer plugin. It supports both mouse and keyboard navigation.

Supporte browsers are Chrome, Safari, Firefox, Opera, IE>8, so can be used in all browsers.

Load them up in your project. Make sure you have jQuery 1.7 or later, as well.


<h3>
Download & Instalation</h3>

Downlod and extract the ZIP file of he emere pachage from here and pute the contents somewhere into your webspace.

<h6>
If you have any comments do not hesitate to write me °c,'</h6>
naoufal.elmasbahi@gmail.com

Documentation FR
==========
<h3>Les caractéristiques :</h3>

• L’utilisation de ce plugin est tellement simple, il suffit d'insérer  les balises d'intégration de JavaScript, et hop le plug-in et prêt à être déployer. (voir démonstration)

• MCTimer Simple en apparence, ce plug-in dispose néanmoins des options de paramétrage. Porte un style simple classique par défaut mais comme tous les champs d’insertion, il s’adapte avec votre style appliqué.

• Ce plug-in est une open source, en revanche son code est structuré d’une manière assez simple. Cela vous donne la main sur la logique de fonctionnement pour faire des rectifications selon vos besoins.

<h3>Démonstration :</h3>

Pour modifier une valeur (Heure/Minute/Seconde), il suffit de cliquer dessus pour la sélectionner. 
 
<img border="0" height="56" src="http://3.bp.blogspot.com/-FTUG9WxSlgs/UcK-3pR6yHI/AAAAAAAAAkA/RPG8QwEY7-c/s200/image002.png" width="200">

Puis vous pouvez la modifier en utilisant les flèches du clavier. ( Il n’y a pas de si simple que ça) 

<img border="0" src="http://4.bp.blogspot.com/-pvFRzjxXN_I/UcK9U1qAX8I/AAAAAAAAAjM/o6-Yc796e1o/s1600/image003.png"> 

Flèches Haut pour augmenter la valeur 

<img border="0" height="54" src="http://2.bp.blogspot.com/-nnBarsWPoSY/UcK-3362SpI/AAAAAAAAAj8/-jMrtB5GwYY/s200/image005.png" width="200">

Flèches Bas  pour diminuer la valeur

<img border="0" height="55" src="http://2.bp.blogspot.com/-Qdc60jKKI24/UcK-3pHNpcI/AAAAAAAAAj4/s41f1RCuVrM/s200/image004.png" width="200">
 
 
Et voilà, c’est fait !!

<h3>Utilisation et Intégration</h3>

Tout d’abord, commencez par télécharger le pack du code JavaScript ainsi que les icônes, sur GITHUB dont le lien est ci-joint à la fin du sujet.
 
Après il suffit d’insérer  la balise que vous souhaitez utiliser comme un champ d’insertion d’heure avec un identificateur (id).

	<div id="MCTimer1" ></div>


Ou :

	
	<div id="MCTimer1" style='background-color: gray;width:112px;' align="center" ></div><br/>
	

En suite, Pour les bibliothéques, il sufit d inserer ces deux balises sur votre page


	<script type="text/javascript" src="js/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="js/mcTime-v1.0.js"></script>


Pour actualisé le plugin on fait l’appel dans la fonction tu chargement du document.


	<script type="text/javascript">
	    $(function() {
	        $('# MCTimer1').mcTimer();
	    });    
	 </script>


<h3>Options :</h3>


Les paramètres par défaut :
   	s 	: pour  afficher ou cacher le champ des Secondes sa prend false par défaut. 
	mode 	: pour choisir le mode d’affichage PM ou AM soit (24h ou 12h) . 
	code 	: pour désactiver l’affichage d’icône. 


<h4>Exemple :</h4>

	$('# MCTimer1').mcTimer({"s":true,"mode":"PM"});
	$('# MCTimer2').mcTimer({"mode":"PM"});
	$('# MCTimer3').mcTimer({"s":true,"code":1988,"mode":"PM"});

<img border="0" height="200" src="http://1.bp.blogspot.com/-ylMTP2xVyFM/UcK9U9C4Q2I/AAAAAAAAAjQ/bFt36UAYDcc/s200/image001.png" width="195">
<h4>Récupération de la valeur :</h4>

	$('# MCTimer1').mcTimer.val();


La fonction “val” retourne la valeur du champ dans une format Time “10:23:12”



