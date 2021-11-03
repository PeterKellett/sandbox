$(document).ready(function(){
    console.log("Document ready!")
    // Variable declarations
    const wcLength = 430;
    var mechanicalSpace = 0;
    var tetaRad = 0;
    var tetaDeg = 0;
    var grad = 0;
    var casterHeight = 0;

    // VW Transporter
    const transporterWidth = 1692;
    const transporterHeight = 530;   
    for (let i=Math.round(transporterWidth / 10) * 10; i>=0; i-=20){
        tetaRad = Math.asin(transporterHeight/i);
        tetaDeg = tetaRad/(Math.PI/180);
        grad = Math.tan(tetaRad);
        casterHeight = wcLength*Math.sin(tetaRad);
        mechanicalSpace = transporterWidth - i;
        $("#transporter-data").append("<tr><td>" + i + " mm / " + mechanicalSpace + " mm" + "</td><td>" + tetaDeg.toFixed(2) + " deg" + "</td><td>"+ (grad*100).toFixed(2) + " %" + "</td><td>" + casterHeight.toFixed(2) + " mm" + "</td></tr>");
        if (Number.isNaN(tetaDeg)) {
            break;
        }
    }
   
    // VW Crafter
    const crafterWidth = 1780;   
    const crafterHeight = 670;
    for (let i=Math.round(crafterWidth / 10) * 10; i>=0; i-=20) {
        tetaRad = Math.asin(crafterHeight/i);
        tetaDeg = tetaRad/(Math.PI/180);
        grad = Math.tan(tetaRad);
        casterHeight = wcLength*Math.sin(tetaRad);
        mechanicalSpace = crafterWidth - i;
        $("#crafter-data").append("<tr><td>" + i + " mm / " + mechanicalSpace + " mm" + "</td><td>" + tetaDeg.toFixed(2) + " deg" + "</td><td>"+ (grad*100).toFixed(2) + " %" + "</td><td>" + casterHeight.toFixed(2) + " mm" + "</td></tr>");
        if (Number.isNaN(tetaDeg)) {
            break;
        }
    }

    // Mercedes Sprinter
    const sprinterWidth = 1738;   
    const sprinterHeight = 576;
    for (let i=Math.round(sprinterWidth / 10) * 10; i>=0; i-=20){
        tetaRad = Math.asin(sprinterHeight/i);
        tetaDeg = tetaRad/(Math.PI/180);
        grad = Math.tan(tetaRad);
        casterHeight = wcLength*Math.sin(tetaRad);
        mechanicalSpace = sprinterWidth - i;
        $("#sprinter-data").append("<tr><td>" + i + " mm / " + mechanicalSpace + " mm" + "</td><td>" + tetaDeg.toFixed(2) + " deg" + "</td><td>"+ (grad*100).toFixed(2) + " %" + "</td><td>" + casterHeight.toFixed(2) + " mm" + "</td></tr>");
        if (Number.isNaN(tetaDeg)) {
            break;
        }
    }
    

  });