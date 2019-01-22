$(document).ready(function() {
    // --- our code goes here ---
    $('#tweetText').keyup( function(event) {
       let maxLen = 140;
    //    $('charCount').innerHTML = maxLen;

       let tweetLen = $('#tweetText').val().length;
       let totalLen = maxLen - tweetLen;
       let counter = $(this).siblings('.counter');
       counter.text(totalLen);



    //    console.log($(this).siblings('.counter'));



        // do a max length instead of remaining 
        // calculate sepeartely (psych out but still look into this)

        // remaining -= $('#tweetText').val().length;
        console.log(totalLen);
      });
     });

