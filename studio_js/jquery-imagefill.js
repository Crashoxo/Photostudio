/**
 * imagefill.js
 * Author & copyright (c) 2013: John Polacek
 * johnpolacek.com
 * https://twitter.com/johnpolacek
 *
 * Dual MIT & GPL license
 *
 * Project Page: http://johnpolacek.github.io/imagefill.js
 *
 * The jQuery plugin for making images fill their containers (and be centered)
 *
 * EXAMPLE
 * Given this html:
 * <div class="container"><img src="myawesomeimage" /></div>
 * $('.container').imagefill(); // image stretches to fill container
 *
 * REQUIRES:
 * imagesLoaded - https://github.com/desandro/imagesloaded
 *
 */

!function(t){t.fn.imagefill=function(i){function e(){f.removeClass("loading"),n(),u.runOnce||o()}function n(){r=0,a=0,s.each(function(){h=t(this).find(u.target).width()/t(this).find(u.target).height();var i=t(this).outerWidth(),e=t(this).outerHeight();r+=t(this).outerHeight(),a+=t(this).outerWidth();var n=i/e;h>n?(t(this).find(u.target).css({top:0,left:-(e*h-i)/2}),t(this).find(u.target).attr("style",t(this).find(u.target).attr("style")+"width:auto !important;height:"+e+"px !important;")):(t(this).find(u.target).css({top:-(i/h-e)/2,left:0}),t(this).find(u.target).attr("style",t(this).find(u.target).attr("style")+"width:"+i+"px !important;height:auto !important;"))})}function o(){var i=0,e=0;s.each(function(){e+=t(this).outerHeight(),i+=t(this).outerWidth()}),(r!==e||a!==i)&&n(),setTimeout(o,u.throttle)}var s=this,h=1,r=0,a=0,d={runOnce:!1,target:"img",throttle:200},u=t.extend({},d,i),f=s.find(u.target).addClass("loading").css({position:"absolute"}),g=s.css("position");return s.css({overflow:"hidden",position:"static"===g?"relative":g}),s.each(function(){r+=t(this).outerHeight(),a+=t(this).outerWidth()}),s.imagesLoaded().done(function(t){e()}).fail(function(t){e()}),this}}(jQuery);