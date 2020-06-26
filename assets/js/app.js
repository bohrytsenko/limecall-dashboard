var app = app || {};

(function ($, plugin) {
	'use strict';

    // ie
    if ( !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./) ){
      $('body').addClass('ie');
    }

    // iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
    var ua = window['navigator']['userAgent'] || window['navigator']['vendor'] || window['opera'];
    if( (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua) ){
        $('body').addClass('touch');
    }

    // fix z-index on ios safari
    if( (/iPhone|iPod|iPad/).test(ua) ){
      $(document, '.modal, .aside').on('shown.bs.modal', function(e) {
        var backDrop = $('.modal-backdrop');
        $(e.target).after($(backDrop));
      });
    }

    //resize
    $(window).on('resize', function () {
      var $w = $(window).width()
          ,$lg = 1200
          ,$md = 991
          ,$sm = 768
          ;
      if($w > $lg){
        $('.aside-lg').modal('hide');
      }
      if($w > $md){
        $('#aside').modal('hide');
        $('.aside-md, .aside-sm').modal('hide');
      }
      if($w > $sm){
        $('.aside-sm').modal('hide');
      }
    });

    app.init = function () {

      $('[data-toggle="popover"]').popover();
      $('[data-toggle="tooltip"]').tooltip();

      // init the plugin
      $('body').find('[data-plugin]').plugin();

    };
    
   	app.init();

   	$(document).on('pjaxEnd', function(){
   		app.init();
   	});

})(jQuery, app);

$( document ).ready(function() {

    // Tag add

    $('.add-tag').click(function () {
        var rng = Math.round(Math.random()*4);
        var rndmClass = [ 'teal', 'green', 'blue', 'brown', 'amber' ];
        var inputVal = $(".input-tag").val();
        var button = $('<button type="button" class="btn '+ rndmClass[rng] +'">' + inputVal + '</button>');
        $(".tag-list").append(button);
    });

    // Remove tag

    $(document).on("click", ".tag-list button" , function() {
        $(this).remove();
    });

    // Tooltip

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // Rate

    $(function() {
        $('#example-fontawesome-o').barrating({
            theme: 'fontawesome-stars',
            hoverState: false,
            showSelectedRating: true
        });
    });

    $(function() {
        $('.calendar').pignoseCalendar({
            theme: 'blue',
            click: function(event, context) {
               $('#step-1').hide();
               $('#step-2').show();
            }

        });
    });

    $('#step-2 .prev-step a').on('click', function () {
       $('#step-2').hide();
       $('#step-1').show();
    });

    $('.slot_div .time-button').on('click', function () {
        $('#step-2').hide();
        $('#step-3').show();
    });

    $('#step-3 .prev-step a').on('click', function () {
        $('#step-3').hide();
        $('#step-2').show();
    });

    $('.btn-schedule').on('click', function () {
        $('#step-3').hide();
        $('#step-4').show();
    });

    $('#step-4 .prev-step a').on('click', function () {
        $('#step-4').hide();
        $('#step-3').show();
    });


    // Lead popup

    $('.lead-popup--open').on('click', function () {
        $('.leads-popup').addClass('show');
    });

    $('.hero-close').on('click', function () {
       $('.leads-popup').removeClass('show');
    });

    // Modal Lead Score

    $('.dropdown-lead-score .dropdown-item').on('click', function () {
        $('.dropdown-lead-score .dropdown-item').removeClass('active');

    });
});
