// /**
//  * Created by macbookpro on 10/02/2017.
//  */
//
//
// {
//     function Knight(name, age) {
//         var soldier2 = document.getElementById("form1").value;
//         this.name = soldier2.element["name"].value;
//         this.age = soldier2.element["age"].value;
//         switch (age) {
//             case 1:
//                 document.write = "Broadsword";
//                 break;
//             case 2:
//                 document.write = "Claymore";
//                 break;
//             case 3:
//                 this.weapon = "Longsword";
//                 break;
//             case 4:
//                 this.weapon = "Mace";
//                 break;
//             case 5:
//                 this.weapon = "War Hammer";
//                 break;
//             case 6:
//                 this.weapon = "Battle Axe";
//                 break;
//             case 7:
//                 this.weapon = "Halbred";
//                 break;
//             case 8:
//                 this.weapon = "Morning Star";
//                 break;
//         }
//     }
//
//
//     (function () {
//         var cards = document.querySelectorAll(".card.effect__click");
//         for (var i = 0, len = cards.length; i < len; i++) {
//             var card = cards[i];
//             clickListener(card);
//         }
//
//         function clickListener(card) {
//             card.addEventListener("click", function () {
//                 var c = this.classList;
//                 c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
//             });
//         }
//     })();
//
//     //     new Knight("Richard", 4);
//     // console.log(soldier2.weapon);
//
// }
var buttons = document.querySelectorAll('.submenu-toggle-button');

[].forEach.call(buttons, function(button) {
  button.addEventListener('click', function() {
    var submenu = button.parentNode.querySelector('.submenu');
    submenu.classList.toggle('open');
  });
});