(function ($) {
	"use strict";

	jQuery(document).ready(function ($){
	$('.map')
      .gmap3({
        address: "Gopalganj, Bangladesh",
        zoom:12,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        }
      })
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#FFE9A1"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#FFE9A1"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#FFE9A1"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#FFE9A1"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFE9A1"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#FFE9A1"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#FFE9A1"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#FFE9A1"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#FFE9A1"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#FFE9A1"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#FFE9A1"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#FFE9A1"},{"lightness":17}]}
        ],
        {name: "Shades of Qrey"}
      );

	});


	jQuery(window).load(function (){

	});

	}(jQuery));

