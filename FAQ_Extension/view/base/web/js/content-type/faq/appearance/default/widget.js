define([
    'jquery',
    'accordion'
], function ($) {
    'use strict';

    return function (config, element) {
        var element = $(element);

        // Set necessary attributes for collapsible items
        element.children("li").each(function (i) {
            $(this).find("[data-collapsible]").attr("data-role", "collapsible");
            $(this).find("[data-content]").attr("data-role", "content");
        });

        // Initialize the accordion
        element.accordion({
            collapsible: true,
            multipleCollapsible: true,
            active: false // Ensure no item is active (open) initially
        });
    };
});
