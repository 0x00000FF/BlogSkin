(function () {
    "use strict";

    function find_sublist(_this) {
        return _this.children(".sub_category_list");
    }



    $(".category_list > li")
        .hover(
            function () {
                let submenu = find_sublist($(this));
                if (!submenu) return;

                submenu.css("display", "block");
            },
            function () {
                let submenu = find_sublist($(this));
                if (!submenu) return;

                submenu.css("display", "none");
            });
})();