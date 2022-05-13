
	/*
	|--------------------------------------------------------------------------
	| Initializes config 
	|--------------------------------------------------------------------------
	| Develover Tatiye.Net 2020
	| @Date 
	*/
    $(function() {
      page.config({
        googleApiKey: '',
        googleAnalyticsId: '',
        reCaptchaSiteKey:  '',
        reCaptchaLanguage: '',
        disableAOSonMobile: true,
        smoothScroll: true,
      });
    });
	/*
	|--------------------------------------------------------------------------
	| AND title 
	|--------------------------------------------------------------------------
	*/
    
	function tatiyeNetSerialize(key,form='form') {
		var form = $('#'+form).serialize();
        $.ajax({
            type: 'POST',
            url: autoload,
            data: form +'&segment='+key+'&autoload='+vendor,
            success: function(data) {
              var add = JSON.parse(data);
                     $.each(add.error, function( key, value ) {
                         var label=$('#'+key).text(); 
                         $('#'+key).html('<img class="mr-5px"src="'+hostName+'/images/23x23/help.png" alt="Image">'+label); 
                     });
                     $.each(add.sukses, function( key, value ) {
                         var label=$('#'+key).text(); 
                         $('#'+key).html('<img class="mr-5px"src="'+hostName+'/images/23x23/check.png" alt="Image">'+label); 
                     });
                    if (add.hasil !== "sukses") {


                    } else {
                     

                    }
            }
        });
	}

	function Consul(key,form='form') {
		var form = $('#'+form).serialize();
        $.ajax({
            type: 'POST',
            url: autoload,
            data: form +'&segment='+key+'&autoload='+vendor,
            success: function(data) {
              var add = JSON.parse(data);
                     $.each(add.error, function( key, value ) {
                         var label=$('#'+key).text(); 
                         $('#'+key).html('<img class="mr-5px"src="'+hostName+'/images/23x23/help.png" alt="Image">'+label); 
                     });
                     $.each(add.sukses, function( key, value ) {
                         var label=$('#'+key).text(); 
                         $('#'+key).html('<img class="mr-5px"src="'+hostName+'/images/23x23/check.png" alt="Image">'+label); 
                     });
                    if (add.hasil !== "sukses") {

                       $("#nugi").html('');

                    } else {
                         $("#nugi").html('helllo');
                       // setcookie('pic', add.pic, time() + (60 * 60 * 24 * 1), '/');
                        document.location.href = 'properti';

                    }
            }
        });
	}

/*
|--------------------------------------------------------------------------
| Initializes JSONVIEW 
|--------------------------------------------------------------------------
| Develover Tatiye.Net 2020
| @Date Sab 13 Nov 2021 11:30:13  WITA
*/
  $(function() {
  $('#btn-json-viewer').click(function() {
    try {
      var input = eval('(' + $('#json-input').val() + ')');
      $('#json-renderer').json_viewer(input);

      var input3 = eval('(' + $('#json-input3').val() + ')');
      $('#json-renderer3').json_viewer(input3);


      var input2 = eval('(' + $('#json-input2').val() + ')');
      $('#json-renderer2').json_viewer(input2);

      var input1 = eval('(' + $('#json-input1').val() + ')');
      $('#json-renderer1').json_viewer(input1);

      var input4 = eval('(' + $('#json-input4').val() + ')');
      $('#json-renderer4').json_viewer(input4);

      var input5 = eval('(' + $('#json-input5').val() + ')');
      $('#json-renderer5').json_viewer(input5);
    }
    catch (error) {
      // alert("Cannot eval JSON: " + error);
    }
  });
  // Display JSON sample on load
  $('#btn-json-viewer').click();
});
