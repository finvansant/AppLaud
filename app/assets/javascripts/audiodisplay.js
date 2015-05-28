function drawBuffer( width, height, context, data ) {
    console.log('length of recording:')
    console.log(data.length);
    $("#time:empty").append(data.length);
    var step = Math.ceil( data.length / width );
    var high = 0;
    for (var db in data){
        if (data[db] > 0.2) { high+=1};
    };
    console.log('number of hits above 0.2 level:')
    console.log(high);
    $("#hits:empty").append(high);

    var amp = height / 2;
    context.fillStyle = "white";
    context.clearRect(0,0,width,height);
    for(var i=0; i < width; i++){ 
        var min = 1.0;
        var max = -1.0;
        for (j=0; j<step; j++) {
            var datum = data[(i*step)+j];
            if (datum < min)
                min = datum;
            if (datum > max)
                max = datum;
        }
        context.fillRect(i,(1+min)*amp,1,Math.max(1,(max-min)*amp));
    }
}
