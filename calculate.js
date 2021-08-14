function generate(){

    var gst = $('input[name="radioButton"]:checked').val();
    $("#webcode").val("");
    var pcode = $('#Pcode').val();
    var number = $('#Number').val();
    var price = $('#Price').val();
    var product = $('#product').val();
    var cost = $('#Cost').val();
    fetch('data.json')
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
        var counter = 0;
        for (let key in data)
        {
            counter = 0;
            if ((pcode == data[key].Pcode) && (number == data[key].Number) && (price == data[key].Price) && (product == data[key]["Product Type"]) && (cost == data[key]["Cost center"]) && (gst == data[key]["GST Included"]))
            {
                $("#webcode").val(data[key]['Web Code']);
                counter = 1;
                break;
            }
        }
        if (counter == 0)
        {
            $("#webcode").val("Data Missing");
        }
    });
    $('#Pcode').val("");
    $('#Number').val("");
    $('#Price').val("");
    $('#Cost').val("");
    $('#product').val("0");
}


$(function(){
    $('#submit').click(function(event){
        event.preventDefault();
       generate();
    });
});