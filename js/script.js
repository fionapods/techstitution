$(document).ready(function(){
  console.log("DOM is ready!")

  $('#border-wait-form').submit(function(event){
    event.preventDefault();
    var pikaKufitare= $('#pika-kufitare').val();
    //Hyrje/Dalje ne minuta
    var hyrjeMinMinuta=$('#hyrje-min-minuta').val();
    var hyrjeMaxMinuta=$('#hyrje-max-minuta').val();
    var daljeMinMinuta=$('#dalje-min-minuta').val();
    var daljeMaxMinuta=$('#dalje-max-minuta').val();
    //Hyrje/Dalje ne metra
    var hyrjeMinMetra=$('#hyrje-min-metra').val();
    var hyrjeMaxMetra=$('#hyrje-max-metra').val();
    var daljeMinMetra=$('#dalje-min-metra').val();
    var daljeMaxMetra=$('#dalje-max-metra').val();

    console.log("Pika Kufitare:", pikaKufitare, "Hyrje Min Minuta:", hyrjeMinMinuta, "Hyrje Max Minuta:", hyrjeMaxMinuta, "Dalje Min Minuta:", daljeMinMinuta, "Dalje Max Minuta", daljeMaxMinuta);
  });
});
