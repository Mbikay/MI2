;
(function () {
    'use strict';

    window.addEventListener('load', function () {
        document.getElementById('btnLogin').addEventListener('click',
            function () {
                document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
            });
        document.getElementById('btnCancel').addEventListener('click',
            function () {
                document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
            });
    });
})();
;(function() {
  'use strict';

  // wait till DOM is loaded
  window.addEventListener('load', function() {
    // disable HTML5 form validation
    document.getElementById('login__form').setAttribute('novalidate', 'novalidate');

    // formchecking starts here
    // ...
  });
})();
//...

    // listen to form submit
    document.getElementById('login__form').addEventListener('submit', function(e) {
      // halt event
      e.preventDefault();
      e.stopPropagation();

      // all ok for now
      let isValid = true;

      // perform checks here
      // ...

      // draw conclusion
      if (isValid) {
        console.log('all ok');
      } else {
        console.log('form contains errors');
      }
    });

    //...
