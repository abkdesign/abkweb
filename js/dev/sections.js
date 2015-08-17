/**
 * Created by alexander on 13-08-2015.
 */
$(function(){
   mentorBubbleClick();
});

function mentorBubbleClick(){
    $('.face').on('click',function(){
       var $this = $(this),
           faceTop = $this.position().top,
           vertMath = -1*(faceTop - 230);

        $this.children('span').addClass('bubble--open');
        $this.siblings().children('span').removeClass('bubble--open');
        $this.parent().css('top', + vertMath +'px');
        $this.siblings().removeClass('face--active');
        $this.addClass('face--active');

        console.log(faceTop);

    });
    $('.face:nth-child(3)').children('span').addClass('bubble--open');
    $('.face:nth-child(3)').addClass('face--active');
}