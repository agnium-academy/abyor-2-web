
      var elem = document.querySelector('#tes');
      var opts = {
        typeSpeed: 50,
        deleteSpeed: 50,
        pauseDelay: 0,
        loop: true,
        postfix: ''
      };
      malarkey(elem, opts).type('MI Calculator')   .pause().delete(13)
                          .type('e More Aware of Your Health').pause().delete(27);
