/*
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 *
 * Available tags for templates:
 * title, link, date_taken, description, published, author, author_id, tags, image*
 */
jQuery(document).ready(function($){
    var id_data = $('#flickr-5708711ee1be7').attr('data-id');
    var count_data = $('#flickr-5708711ee1be7').attr('data-count');
    var count_data_n = Number(count_data);
    $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?ids='+id_data+'&lang=en-us&format=json&jsoncallback=?', function(data){
        $.each(data.items, function(index, item){
            if(index >= count_data_n){
                return false;
            }
            $("<img/>").attr("src", item.media.m.replace('_m','_s')).appendTo("#flickr-5708711ee1be7")
              .wrap("<li class='clearfix'><a class='flicker-popup-link cursor-zoom' href='" + item.media.m.replace('_m','_b') + "'></a></li>");
              
               
        });
    });
});