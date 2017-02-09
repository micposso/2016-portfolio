<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav navbar-nav navbar-left footer">
          <li class="footer-copy"><?php echo date("Y")." - Michael Posso"; ?> - This site is under construction -</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
  $(document).ready(function () {
    $('#hidden').fadeIn(2000).removeClass('hidden');
  });
  $(document).ready(function () {
    $('.tip').tooltipster();
  });
  $("#ghost").ghosttyper({
    messages: ['Websites', 'Emails', 'Banners', 'Robots']
    , timeWrite: 100, //time between displaying each chracter
    timeDelete: 100, //time between removing(backspace) each chracter
    timePause: 1000, //waiting time after displaying text
    repeat: true, //loop it indefinitely
    callback: function () {
      console.log('called when the entire array of messages has been completed.');
    }
  });
  $(function () {
    $.scrollUp({
      scrollImg: true
    });
  });
</script>
</body>

</html>