
      var elem = document.querySelector('#tes');
      var opts = {
        typeSpeed: 50,
        deleteSpeed: 50,
        pauseDelay: 0,
        loop: true,
        postfix: ''
      };
      malarkey(elem, opts).type('BMI Calculator')   .pause().delete()
                          .type('Keep Aware With Your Health').pause().delete();