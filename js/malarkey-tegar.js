
      var elem = document.querySelector('#tes');
      var opts = {
        typeSpeed: 50,
        deleteSpeed: 50,
        pauseDelay: 2000,
        loop: true,
        postfix: ''
      };
      malarkey(elem, opts).type('BMI Calculator')   .pause().delete()
                          .type('Be Aware With Your Health').pause().delete();