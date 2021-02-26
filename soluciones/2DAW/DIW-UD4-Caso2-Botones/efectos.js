
      $(document).ready(function () {
        $("#button1").button();
        $("#button1").click(function () {
          $(".azul").fadeOut(1500);
          $(".azul").fadeIn(2000);
        });
        $("#button2").button();
        $("#button2").click(function () {
          $(".verde").slideUp({ height: "110px" }, 800);
          $(".verde").slideDown({ height: "150px" }, 800);
        });
        $("#button3").button();
        $("#button3").click(function () {
          $(".naranja").animate({ backgroundColor: "#c75402" }, 500);
          $(".naranja").animate({ backgroundColor: "#ab1d22" }, 500);
          $(".naranja").animate({ backgroundColor: "#981dab" }, 500);
          $(".naranja").animate({ backgroundColor: "#401dab" }, 500);
          $(".naranja").animate({ backgroundColor: "#f5ad42" }, 500);
        });
        $("#button4").button();
        $("#button4").click(function () {
          $(".rojo").animate({ borderRadius: "30px" }, 1000);
          $(".rojo").animate({ borderRadius: "10px" }, 1000);
        });
        $("#button5").button();
        $("#button5").click(function () {
          $(".violeta").toggle();
        });
        $("#button6").button();
        $("#button6").click(function () {
          $(".amarillo").hide(1500);
          $(".rojo").hide(1500);
          $(".amarillo:odd").show(1500);
          $(".rojo:even").show(1500);
        })
      });
    