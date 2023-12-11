$(document).ready(function() {
    function updateCardImage(cardId, imageUrl) {
        $('#card-' + cardId).attr('src', imageUrl);
      }

    for (let i = 1; i <= 6; i++) {
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function(data) {
            var imageUrl = data.results[0].picture.large;
            updateCardImage(i, imageUrl);
          }
        });
      }
  });

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})