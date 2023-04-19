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
    }
    else if(selection == "Analyse"){
        document.getElementById('txtquestion').style.display = 'none';
        document.getElementById('txtanalyse').style.display = 'block';
        document.getElementById('txtniveau').style.display = 'none';
        document.getElementById('txtmethodeformation').style.display = 'none';
        document.getElementById('txttypeformation').style.display = 'none';
        
    }
    else if(selection == "Formation"){
        document.getElementById('txtquestion').style.display = 'none';
        document.getElementById('txtanalyse').style.display = 'none';
        document.getElementById('txtniveau').style.display = 'block';
        document.getElementById('txtmethodeformation').style.display = 'block';
        document.getElementById('txttypeformation').style.display = 'block';
    }
    else{
        document.getElementById('txtquestion').style.display = 'none';
        document.getElementById('txtanalyse').style.display = 'none';
        document.getElementById('txtniveau').style.display = 'none';
        document.getElementById('txtmethodeformation').style.display = 'none';
        document.getElementById('txttypeformation').style.display = 'none';
    }
    
  }
  
  
  
  