Ajax Chosen
===========

> **Déprécié, ne fonctionne plus avec les nouvelles versions de chosen. On peut utiliser le plugin sélecteur générique comme remplacement…**


Un plugin pour intégrer le code de meltingince [ajax-chosen](https://github.com/meltingice/ajax-chosen) dans SPIP.

Pour l'activer sur une saisie `select`, il suffit de lui ajouter la classe `ajax-chosen`.
Il faut aussi donner l'adresse de l'API json qui donnera les valeurs en utilisant un attribut `data`.
Par exemple, vous pouvez l'utiliser dans une saisie comme ça :

    [(#SAISIE{selection, id_auteur,
              label=Visiteur, class="chosen ajax-chosen",
              attributs='data-ajax-chosen-json-api="#URL_PAGE{json_auteurs.json}"'})]

Dans ce cas, la page `json_auteurs.json` donnera les noms des auteurs avec lesquels peupler la saisie `select`.
Nous créons alors un squelette qui produira ces noms en créant le squelette `json_auteurs.json.html` :

    #HTTP_HEADER{Content-type:text/javascript;}

    #SET{resultat, #ARRAY}

    <BOUCLE_auteurs1(AUTEURS) {nom==^#ENV{term}} {statut IN 0minirezo,1comite,6forum}{doublons}>
      [(#SET{resultat, #GET{resultat}|push{#ARRAY{value,#ID_AUTEUR,text,#TITRE_AUTEUR}}})]
    </BOUCLE_auteurs1>

    [(#GET{resultat}|json_encode)]

    #FILTRE{trim}
