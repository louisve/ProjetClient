function afficherNouvelElement(){

    // Récupérez la valeur sélectionnée
    var selection = document.querySelector('select').value;

    //Fais apparaitre un ce qui est nécéssaire en fonction du choix
    if(selection == "Question"){
        
        document.getElementById('txtquestion').style.display = 'block';
        document.getElementById('txtanalyse').style.display = 'none';
        document.getElementById('txtniveau').style.display = 'none';
        document.getElementById('txtmethodeformation').style.display = 'none';
        document.getElementById('txttypeformation').style.display = 'none';
        document.getElementById('Bazai').style.display = 'none';
        document.getElementById('Sanhe').style.display = 'none';
        document.getElementById('Sanyuan').style.display = 'none';
    }
    else if(selection == "Analyse"){
        document.getElementById('txtquestion').style.display = 'none';
        document.getElementById('txtanalyse').style.display = 'block';
        document.getElementById('txtniveau').style.display = 'none';
        document.getElementById('txtmethodeformation').style.display = 'none';
        document.getElementById('txttypeformation').style.display = 'none';
        document.getElementById('Bazai').style.display = 'none';
        document.getElementById('Sanhe').style.display = 'none';
        document.getElementById('Sanyuan').style.display = 'none';
        
    }
    else if(selection == "Formation"){
        document.getElementById('txtquestion').style.display = 'none';
        document.getElementById('txtanalyse').style.display = 'none';
        document.getElementById('txtniveau').style.display = 'block';
        document.getElementById('txtmethodeformation').style.display = 'block';
        document.getElementById('txttypeformation').style.display = 'block';
        document.getElementById('Bazai').style.display = 'block';
        document.getElementById('Sanhe').style.display = 'block';
        document.getElementById('Sanyuan').style.display = 'block';
    }
    else{
        document.getElementById('txtquestion').style.display = 'none';
        document.getElementById('txtanalyse').style.display = 'none';
        document.getElementById('txtniveau').style.display = 'none';
        document.getElementById('txtmethodeformation').style.display = 'none';
        document.getElementById('txttypeformation').style.display = 'none';
    }
    
}

function attacheLesEvenementDansLaPage(){

    function verifFormulaire(){
        let nom = document.querySelector("#nom").value;
        let prenom = document.querySelector("#prenom").value;
        let mail = document.querySelector("#mail").value;
        let tel = document.querySelector("#tel").value;
        let option = document.querySelector("#typedemande").value;

        if (nom == ""){
            document.querySelector("#nom").style.borderColor = "red";  
        }
        if (prenom ==  ""){
            document.querySelector("#prenom").style.borderColor = "red";
        }
        if (mail ==  ""){
            document.querySelector("#mail").style.borderColor = "red";

        }
        if (tel ==  ""){
            document.querySelector("#tel").style.borderColor = "red";

        }
        if (option ==  ""){
            document.querySelector("#typedemande").style.borderColor = "red";

        }

    }

    let envoie = document.querySelector("#envoyer");
    envoie.addEventListener("click", verifFormulaire);
  
}

window.addEventListener("load", attacheLesEvenementDansLaPage);  