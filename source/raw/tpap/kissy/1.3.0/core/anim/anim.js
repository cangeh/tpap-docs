var Anim = KISSY.Anim;

var anim = Anim(
    '#test1',
    {
        'background-color':'#fcc',
        //'border': '5px dashed #999',
        'border-wdith':'5px',
        'border-color':"#999999",
        'border-style':"dashed",
        'width': '100px',
        'height': '50px',
        'opacity': '.5',
        'font-size': '48px',
        'padding': '30px 0',
        'color': '#FF3333'
    },5,
    'bounceOut',function(){
        console.log('��������');
    });


KISSY.all('.J_run').on("click", function() {
    anim.run();
});
KISSY.all('.J_stop').on("click", function() {
    if(anim.isRunning()){
        anim.stop();
    }else{
        console.log('�����Ѿ�����');
    }

});
KISSY.all('.J_pause').on("click", function() {
    if(anim.isPaused()){
        console.log('�����Ѿ���ͣ');
    }else{
        anim.pause();
    }
});
KISSY.all('.J_resume').on("click", function() {
    anim.resume();
});
