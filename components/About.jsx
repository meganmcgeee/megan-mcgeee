const About = React.create({
  render() {
    return (
      <div class="one-half column">
        <div class="row" style="margin-top:25% ">
          // <!-- <h5><b>Megan McGee</b> is a Front-End Web Dev who just loves Javascript of all kinds, data streams, and jokes about functions. Back-end in training. Closing the gender gap, one bit at a time. Get souped.</h5>
          //   <br>
          //   <br>
          //   <h5>Check out her <a href="pages/work.html"> work</a> and her <a href="pages/rantings.html"> rantings</a>.</h5> -->
          // <!-- Bacon.JS Magic -->
            <div class="test"></div>
         </div>
     </div>
     <script src="bower_components/jquery/dist/jquery.min.js"></script>
     <script src="bower_components/bacon/dist/Bacon.min.js"></script>
     <script>
       $('#logo')
         .asEventStream('mouseover')
         .subscribe(() => alert("Hey! Hands off!"));
     // Text typewriting magic
     (function () {
         var arr, elem, prop;
         elem = $('.test');
         arr = 'Megan McGee is a Front-End Web Dev who just loves Javascript of all kinds, data streams, and jokes about functions. Back-end in training. Closing the gender gap, one bit at a time. Get souped.'.split('');
         prop = Bacon.sequentially(50, arr).scan('', function (a, b) {
             return a + b;
         });
         prop.assign(elem, 'text');
     }.call(this));
     </script>

    );
  },
});
