$(function () {
    $("#burger").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $("#nav").toggleClass("active");
    });

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.parent(".accordion__item").toggleClass("active");
    });

    $("[data-nav]").on("click", function(event){
        event.preventDefault();

        $("#burger").removeClass("active");
        $("#nav").removeClass("active");
    });
});