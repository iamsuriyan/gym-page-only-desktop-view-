function showContent(index) {
  // Hide all content
  var contents = document.getElementsByClassName("hidden");
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }

  // Show the selected content
  var selectedContent = document.getElementsByClassName("hidden")[index - 1];
  selectedContent.classList.add("active");
}
