// var exampleModal = document.getElementById("portfolioModal");

$("#portfolioModal").bind("show.bs.modal", function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;

  // Extract info from data-portfolio-* attributes
  const porject_id = button.getAttribute("data-portfolio-project");
  const porject_title = button.getAttribute("data-portfolio-project-title");
  const portfolio_page_link = "./portfolio/" + porject_id + "/index.html";

  // Update the modal's content.
  $(".modal-title").text(porject_title);
  $("#profileModalContent").html("<div>Loading...</div>");
  $.get(portfolio_page_link, (html) => {
    $("#profileModalContent").html(html);
  });
});

$("#portfolioModal").bind("hidden.bs.modal", function (event) {
  $("video").trigger("pause");
});
