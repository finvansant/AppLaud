function drawBuffer( width, height, context, data ) {
    
    console.log('length of recording:')
    console.log(data.length);
    $("#time:empty").append(data.length);
    
    var step = Math.ceil( data.length / width );
    var real_length = 0;
    var high = 0;
    for (var pcm in data){
        if (data[pcm] > 0.02) { real_length+=1 };
        if (data[pcm] > 0.1) { high+=1 };
    };
    console.log('real length:')
    console.log(real_length)
    console.log('number of hits above 0.1 level:')
    console.log(high);
    $("#hits:empty").append(high);

    score = Math.round(high / real_length * 100)
    $("#score:empty").append(score)

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