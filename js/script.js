$(document).ready(function(){
  console.log("DOM is ready!")

  var dateTimeNow= new Date();

  $('#border-wait-form').submit(function(event){
    event.preventDefault();
    var pikaKufitare= $('#pika-kufitare').val();
    var dateTimeNow=$('#datetime-now').val();
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

    var dataJson = {};

    dataJson["pikaKufitare"]= pikaKufitare;
    dataJson["hyrjeMinMinuta"]= parseInt(hyrjeMinMinuta);
    dataJson["hyrjeMaxMinuta"]= parseInt(hyrjeMaxMinuta);
    dataJson["daljeeMinMinuta"]= parseInt(daljeMinMinuta);
    dataJson["daljeMaxMinuta"]= parseInt(daljeMaxMinuta);
    dataJson["hyrjeMinMetra"]= parseInt(hyrjeMinMetra);
    dataJson["hyrjeMaxMetra"]= parseInt(hyrjeMaxMetra);
    dataJson["daljeMinMetra"]= parseInt(daljeMinMetra);
    dataJson["daljeMaxMetra"]= parseInt(daljeMaxMetra);
    dataJson["dateTimeNow"]= new Date();

    console.log(dataJson);



    // console.log("Date Now:", dateTimeNow);
    // console.log("Pika Kufitare:", pikaKufitare, "Hyrje Min Minuta:", hyrjeMinMinuta, "Hyrje Max Minuta:", hyrjeMaxMinuta, "Dalje Min Minuta:", daljeMinMinuta, "Dalje Max Minuta", daljeMaxMinuta);
  });
});
