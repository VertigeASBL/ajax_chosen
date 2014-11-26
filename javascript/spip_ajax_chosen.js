;(function ($) {
    jQuery(document).ready(function(){

        spip_ajax_chosen = function () {
            $('.ajax-chosen').each(function () {
                self = $(this);
                self.ajaxChosen({
                    type: 'GET',
                    url: self.data('ajax-chosen-json-api'),
                    dataType: 'json'
                }, function (data) {
                    var results = [];

                    $.each(data, function (i, val) {
                        results.push({ value: val.value, text: val.text });
                    });

                    return results;
                }, function () {
                    self.trigger('chose:updated');
                });
            });
        }

        spip_ajax_chosen();
        onAjaxLoad(spip_ajax_chosen);
    });
})(jQuery);
