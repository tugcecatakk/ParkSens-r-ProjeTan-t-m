document.getElementById('toggleButton1').addEventListener('click', function () {
    var collapseElement = document.getElementById('collapseExample1');
    var collapse = new bootstrap.Collapse(collapseElement, {
      toggle: true 
    });
  });
  document.getElementById('toggleButton2').addEventListener('click', function () {
    var collapseElement = document.getElementById('collapseExample2');
    var collapse = new bootstrap.Collapse(collapseElement, {
      toggle: true 
    });
  });
  document.getElementById('yenileme').addEventListener('click', function () {
    location.reload(); 
  });