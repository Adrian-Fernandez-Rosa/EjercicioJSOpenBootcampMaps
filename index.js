let marker, map; 

function initMap() {

    const posicion = {
        lat: -32.94682,
        lng: -60.63832
    }

    const lugarFavorito1 = {
        lat: -32.94682,
        lng: -60.62844
    }

    const lugarFavorito2 = {
        lat: -32.94682,
        lng: -60.67844
    }

    const lugarFavorito3 = {
        lat: -32.94682,
        lng: -60.64944
    }

   
    map = new google.maps.Map(document.getElementById("map") , {
        zoom: 15,
        center: posicion
    })

     // primer parametro en que lugar lo usaremos

     marker = new google.maps.Marker({
        position: lugarFavorito1,
        map: map,
        title: "Lugar favorito1"
     })

     const favorito2 = new google.maps.Marker({
       position: lugarFavorito2,
       map: map,
       title: "Lugar Favorito 2"
     })

     const favorito3 = new google.maps.Marker({
        position: lugarFavorito3,
        map: map,
        title: "Lugar Favorito 3"
      })



}