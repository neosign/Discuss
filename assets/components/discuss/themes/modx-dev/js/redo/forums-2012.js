/*
 * In-Field Label jQuery Plugin
 * http://fuelyourcoding.com/scripts/infield.html
 *
 * Copyright (c) 2009 Doug Neiner
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 0.1
 */
/*
 In-Field Label jQuery Plugin
 http://fuelyourcoding.com/scripts/infield.html

 Copyright (c) 2009 Doug Neiner
 Dual licensed under the MIT and GPL licenses.
 Uses the same license as jQuery, see:
 http://docs.jquery.com/License

*/
(function(d){d.InFieldLabels=function(e,b,f){var a=this;a.$label=d(e);a.label=e;a.$field=d(b);a.field=b;a.$label.data("InFieldLabels",a);a.showing=true;a.init=function(){a.options=d.extend({},d.InFieldLabels.defaultOptions,f);if(a.$field.val()!==""){a.$label.hide();a.showing=false}a.$field.focus(function(){a.fadeOnFocus()}).blur(function(){a.checkForEmpty(true)}).bind("keydown.infieldlabel",function(c){a.hideOnChange(c)}).bind("paste",function(){a.setOpacity(0)}).change(function(){a.checkForEmpty()}).bind("onPropertyChange",
function(){a.checkForEmpty()})};a.fadeOnFocus=function(){a.showing&&a.setOpacity(a.options.fadeOpacity)};a.setOpacity=function(c){a.$label.stop().animate({opacity:c},a.options.fadeDuration);a.showing=c>0};a.checkForEmpty=function(c){if(a.$field.val()===""){a.prepForShow();a.setOpacity(c?1:a.options.fadeOpacity)}else a.setOpacity(0)};a.prepForShow=function(){if(!a.showing){a.$label.css({opacity:0}).show();a.$field.bind("keydown.infieldlabel",function(c){a.hideOnChange(c)})}};a.hideOnChange=function(c){if(!(c.keyCode===
16||c.keyCode===9)){if(a.showing){a.$label.hide();a.showing=false}a.$field.unbind("keydown.infieldlabel")}};a.init()};d.InFieldLabels.defaultOptions={fadeOpacity:0.5,fadeDuration:300};d.fn.inFieldLabels=function(e){return this.each(function(){var b=d(this).attr("for");if(b){b=d("input#"+b+"[type='text'],input#"+b+"[type='search'],input#"+b+"[type='tel'],input#"+b+"[type='url'],input#"+b+"[type='email'],input#"+b+"[type='password'],textarea#"+b);b.length!==0&&new d.InFieldLabels(this,b[0],e)}})}})(jQuery);



// Forum Functions
$(function() {
	// move labels inside inputs
	$(".masthead-login label").inFieldLabels();
    $(".dis-new-thread-title-wrapper label").inFieldLabels();
	// options toggle
    $('#F-Toggle-Options a.a-options').click(function(event) {
        event.preventDefault();
        $('#F-Toggle-List').slideToggle(130);
    });
    $('#F-Toggle-List').click(function(event) {
        event.preventDefault();
        $('#F-Toggle-List').slideToggle(130);
    });
    $('#F-Toggle-List a').click(function(event) {
        event.stopPropagation();
    });

    // Tipster load
    $('.tooltip').tooltipster({
        tooltipTheme: '.modx-tipster',
        position: 'left'
    });

    // Opacity control on paragraph tips
    $('ul.dis-list li.dis-post').mouseenter(
    function(){
        $(this).find('.dis-post-answer-marker p').stop().animate({marginLeft: '-15px', opacity: .99}, 200).delay(800).animate({opacity: .0}, 500)
    });
    $('ul.dis-list li.dis-post').mouseleave(
    function(){
        $(this).find('.dis-post-answer-marker p').css('opacity', 0).stop().animate({marginLeft: '0px', opacity: 0}, 200)
    });
    $('.dis-post-notanswer a span').mouseenter(
        function(){
            $(this).closest('div').find('p').stop().animate({marginLeft: '-15px', opacity: .99}, 100)
    });

    

    $('#Show-answer-link').click(
        function(e){
            e.preventDefault();
            $('ul.dis-list li:first-child').next().find('.dis-post-answer-marker p').animate({marginLeft: '-15px', opacity: .99}, 200);
            $('ul.dis-list li:first-child').next().find('.dis-post-notanswer a span').animate({opacity: .99}, 200);

        });

});
