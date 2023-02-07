/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/

function dateRecherche(){
    const dateEntrer = document.getElementById("date").value;

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+dateEntrer+'&camera=NAVCAM&api_key=WHu5HkTRhVwNb6QM9ZCha1okRfbH0MlLcQTL5WiO')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log('Number of items in JSON data:', data.photos.length);
            randImage = Math.floor(Math.random() * data.photos.length);
            
            console.log(data.photos[randImage].img_src);
            
            document.getElementById('Image').src = data.photos[randImage].img_src;
            document.getElementById('Image').style.display = 'block';
            })
        .catch(err => {console.error(err);
        alert("Aucune image pour la date sélectionnée.");
        });

}

function Recherche(){
    const rechercheEntrer = document.getElementById("texte").value;

    fetch('https://images-api.nasa.gov/search?q='+rechercheEntrer+'&media_type=image')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log('Number of items in JSON data:', data.collection.items.length);
            randImage = Math.floor(Math.random() * data.collection.items.length);
            
            console.log(data.collection.items[randImage].links[0].href);
            
            document.getElementById('Image').src = data.collection.items[randImage].links[0].href;
            document.getElementById('Image').style.display = 'block';
            })
        .catch(err => {console.error(err);
        alert("Aucune image pour la recherche faite.");
        });

}