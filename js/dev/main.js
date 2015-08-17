;(function ( $, window, document, undefined ) {

    "use strict";
    var menuLeft = document.getElementById( 'main-menu' ),
        showLeftPush = document.getElementById( 'toggle' ),
        maintContent = document.getElementById( 'main-content' );


    showLeftPush.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( maintContent, 'container-main--active' );
        classie.toggle( menuLeft, 'menu-push-toright' );
    };



})( jQuery, window, document );
