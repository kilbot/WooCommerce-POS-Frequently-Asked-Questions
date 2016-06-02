$(function() {
  var $disqusDiv = $("<div>", {
      "id": "disqus_thread"
  });
  $(".faq-page-container .panel-body").append($disqusDiv);

  if (typeof DISQUS !== "undefined") {
    DISQUS.reset({
        reload: true,
        config: function () {
            this.language = $('html').attr('lang') || "en";
            this.page.url = window.location.href;
            this.page.identifier = currentUrl();

            // if (use_identifier) {
            //     this.page.identifier = currentUrl();
            // }
        }
    });
  }
});