// var exampleModal = document.getElementById("portfolioModal");

$("#portfolioModal").bind("show.bs.modal", function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;

  // Extract info from data-bs-* attributes
  const porject_id = button.getAttribute("data-portfolio");
  const portfolio_page_link = "./portfolio/" + porject_id + "/index.html";
  $.get(portfolio_page_link, function (html) {
    $("#profileModalContent").html(html);
  });

  // Update the modal's content.
  $(".modal-title").text(getTitleFromId(porject_id));
});

getTitleFromId = (id) => id.split("_").join(" ");
