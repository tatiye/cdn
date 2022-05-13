
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
/*
|--------------------------------------------------------------------------
| Initializes title 
|--------------------------------------------------------------------------
| Develover Tatiye.Net 2020
| @Date 
*/

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
    }
  });
  // Display JSON sample on load
  $('#btn-json-viewer').click();
});
    /*
    |--------------------------------------------------------------------------
    | Initializes andSeeMoresimplebar 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2022
    | @Date  
    */
     function andSeeMoresimplebar(){
         $("#SeeMoresimplebar").html('');
        
    }
    /* and class andSeeMoresimplebar */
    function SeeMoresimplebar() {
        $.ajax({
            type: 'POST',
            url: autoload,
            data: '&etc'+'=package/assets/View/myMenu/all'+'&autoload='+vendor,
            success: function(data) {
             $("#SeeMoresimplebar").html(data);
            }
        });
    }

/*
|--------------------------------------------------------------------------
| Initializes Insert 
|--------------------------------------------------------------------------
| Develover Tatiye.Net 2020
| @Date Jum 08 Apr 2022 08:29:48  WITA
*/
 function dshSendStatusInsert(data,segment) {
          var add = JSON.parse(data);
       
        if (add.hasil !== "sukses") {
                $.each(add.error, function( key, value ) {
                   var label=$('#'+key).text(); 
                   $('#'+key).html('<i style="color: #f0506e !important;"class="icon-material-outline-help-outline"uk-tooltip="title: '+value+'"></i> '+label); 

               });
                $.each(add.sukses, function( key, value ) {
                   var label=$('#'+key).text(); 
                   $('#'+key).html('<i style="color:#32d296 !important;"class="icon-feather-check-circle"></i> '+label); 
               });
        } else {
            $("#"+segment).hide();
               location.reload();
        }
    }

/*
|--------------------------------------------------------------------------
| AND Insert 
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| Initializes Delete 
|--------------------------------------------------------------------------
| Develover Tatiye.Net 2020
| @Date 
*/
    function dshSendStatusDelete(data,segment) {
        var add = JSON.parse(data);
        $("#"+segment).hide();
        var token=add.token; 
        $("#"+token).remove()();
    }

/*
|--------------------------------------------------------------------------
| AND Delete 
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| Initializes Update file 
|--------------------------------------------------------------------------
| Develover Tatiye.Net 2020
| @Date Sel 19 Apr 2022 01:40:27  WITA
*/
    function dshSendStatusUpdate(data,segment) {
        var add = JSON.parse(data);



        if (add.hasil !== "sukses") {
                $.each(add.error, function( key, value ) {
                   var label=$('#'+key).text(); 
                   $('#'+key).html('<i style="color: #f0506e !important;"class="icon-material-outline-help-outline"uk-tooltip="title: '+value+'"></i> '+label); 

               });
               $.each(add.sukses, function( key, value ) {
                   var label=$('#'+key).text(); 
                   $('#'+key).html('<i style="color:#32d296 !important;"class="icon-feather-check-circle"></i> '+label); 
               });

                 var myfriend='';
                $.each(add.informasi,function(index,value){
                    var desain= `<i style="color: #f0506e !important;"class="fs-15px mdi mdi-close-circle"></i> ${index} ${value}`;
                    myfriend+=desain;
                    $("#info_"+segment).html(myfriend);
                });
            
        } else {
            $("#"+segment).hide();
            var token=add.token; 
            $.each(add.data, function( key, value ) {
               $('#'+token+' .'+key).text(value);
           });
        }
    }

/*
|--------------------------------------------------------------------------
| AND Update file 
|--------------------------------------------------------------------------
*/
    function dshSendStatusUpdateupload(data,segment) {
        var add = JSON.parse(data);



        if (add.hasil !== "sukses") {
                $.each(add.error, function( key, value ) {
                   var label=$('#'+key).text(); 
                   $('#'+key).html('<i style="color: #f0506e !important;"class="icon-material-outline-help-outline"uk-tooltip="title: '+value+'"></i> '+label); 

               });
               $.each(add.sukses, function( key, value ) {
                   var label=$('#'+key).text(); 
                   $('#'+key).html('<i style="color:#32d296 !important;"class="icon-feather-check-circle"></i> '+label); 
               });
               
                 var myfriend='';
                $.each(add.informasi,function(index,value){
                    var desain= `<i style="color: #f0506e !important;"class="fs-15px mdi mdi-close-circle"></i> ${index} ${value}`;
                    myfriend+=desain;
                    $("#info_"+segment).html(myfriend);
                });
            
        } else {
            $("#"+segment).hide();
            location.reload();
        }
    }

/*
|--------------------------------------------------------------------------
| Initializes Inport File 
|--------------------------------------------------------------------------
| Develover Tatiye.Net 2020
| @Date 
*/
 /*
 |--------------------------------------------------------------------------
 | Initializes title 
 |--------------------------------------------------------------------------
 | Develover Tatiye.Net 2020
 | @Date 
 */
 function dshSendStatusImport() {

            $("#importfile").change(function(){
              var allowedTypes = [
              'application/octet-stream', 
              'application/vnd.ms-excel', 
              'application/x-csv', 
              'text/x-csv', 
              'text/csv', 
              'application/csv', 
              'application/excel', 
              'application/vnd.msexcel',
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
              ];
             var file = this.files[0];
             var fileName = this.files[0].name;
             var fileType = file.type;
              if(!allowedTypes.includes(fileType)){
                  var informasi=`
                           <div class="glyph fs1">
                               <div class="clearfix bshadow0 pbs">
                                   <span class="icon-material-baseline-notifications-none"></span>
                                   <strong class="mls fs-9px ">Ekstensi  excel, csv, xls</strong>
                               </div>
                           </div>
                    `;
                    $("#uploadStatus").html(informasi);
                   $("#imagePreview").attr("src", hostName+'/images/anomous.png');

              } else {
                   $("#uploadStatus").html('');
                   $("#fileNameInport").html(fileName);
                   $("#imagePreview").attr("src", hostName+'/imgdsh/excel.png');
              }
         });
 };
 /*
 |--------------------------------------------------------------------------
 | AND title 
 |--------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------
| AND Inport File 
|--------------------------------------------------------------------------
*/
  /*
  |--------------------------------------------------------------------------
  | Initializes LODER SVG 
  |--------------------------------------------------------------------------
  | Develover Tatiye.Net 2020
  | @Date Sab 13 Nov 2021 06:49:50  WITA 
  */
        var loder=`
          <div id="top_loder"class="my-8 pt-10px pl-35px"style="width:100px;margin: auto;">
             <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
              <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                <path fill="#1a73e8" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                C22.32,8.481,24.301,9.057,26.013,10.047z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="0.5s"
                  repeatCount="indefinite"/>
                </path>
              </svg>
        </div>
    `; 
        var loderleft=`
          <div id="top_left"class=""style="width:100px;">
             <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
              <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                <path fill="#1a73e8" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                C22.32,8.481,24.301,9.057,26.013,10.047z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="0.5s"
                  repeatCount="indefinite"/>
                </path>
              </svg>
        </div>
    `; 
        var loderSmall=`
         <div id="top_loder"class="my-8 pt-0px "style="width:40px;margin: auto;">
             <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="30px" height="30px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
              <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                <path fill="#1a73e8" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                C22.32,8.481,24.301,9.057,26.013,10.047z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="0.5s"
                  repeatCount="indefinite"/>
                </path>
              </svg>
        </div>
    `; 
  /*
  |--------------------------------------------------------------------------
  | Initializes title 
  |--------------------------------------------------------------------------
  | Develover Tatiye.Net 2020
  | @Date 
  */

  /*
  |--------------------------------------------------------------------------
  | AND title 
  |--------------------------------------------------------------------------
  */
  /*
  |--------------------------------------------------------------------------
  | Initializes Top Loder 
  |--------------------------------------------------------------------------
  | Develover Tatiye.Net 2020
  | @Date Sab 13 Nov 2021 06:50:16  WITA
  */
      function netTopLoder(options,key) {
        $("#"+options).html(loder);
         $("#top_loder").css({"margin-top":key}); 
    }

      function netLeftLoder(options,key) {
          $("#"+options).html(loderleft);
         $("#top_left").css({"margin-top":key}); 
    }
      function loderTopSmall(options,key) {
          $("#"+options).html(loderSmall);
         $("#top_left").css({"margin-top":key}); 
    }


  /*
  |--------------------------------------------------------------------------
  | AND Top Loder 
  |--------------------------------------------------------------------------
  */
  /*
  |--------------------------------------------------------------------------
  | Initializes Dialog Append 
  |--------------------------------------------------------------------------
  | Develover Tatiye.Net 2020
  | @Date Kam 07 Apr 2022 06:53:07  WITA
  */
    function ttyDialog(ops,dirload,key='') {
    var split       =ops.split('/');
    var datetime    =new Date();
    var time        =datetime.getTime();
    var css         =ops.split('x');
    var cssL        =css[2].split('/');
    var margintop   =css[0]+'px';
    var width       =css[1]+'px';
    var marginleft  =cssL[0]+'px'; 
    var dsnDialog=`
        <div id="ttyDialog">

             <div  class="ttyDialogContent_${time}">
             <div  class="uk-open">
                 <div id="ttyDialogStyle_${time}" class="uk-modal-dialog uk-modal-body rounded-md shadow-2xl">
                     <button onclick="ttyClose('${time}');"class="uk-modal-close-default bg-gray-300 p-2 rounded-full m-3" type="button" uk-close></button>
                     <h2 id="ttyDialogHeader" class="mb-2 uk-modal-title">${split[1]}</h2>
                       <form id="form_${time}" class="pb-20px" method="POST" enctype="multipart/form-data">
                            <div id="contentBody${time}"></div>
                       </form>
                 </div>
             </div>
        </div>
        </div>
     `;
     $("#RealApp").append(dsnDialog);
      $(".ttyDialogContent_"+time).draggable({
        handle: "#ttyDialogHeader",
        scroll: false
       });
          $("#ttyDialogStyle_"+time).css({"margin-top": margintop,"margin-left": marginleft,"width":width});
          $("#ttyDialog").css({"width":width});

       var package      ='package/'+dirload; 
        $.post(autoload,
              {
                autoload: vendor,
                etc: package,
                key: key,
                created:time,
              })
              .done(function (data) {
                 netTopLoder('contentBody'+time,'5%');
                $("#contentBody"+time).html(data);

         });
      }
    function ttyClose(id) {
         $(".ttyDialogContent_"+id).hide();
    }
  
  /*
  |--------------------------------------------------------------------------
  | AND Dialog Append 
  |--------------------------------------------------------------------------
  */
  /*
  |--------------------------------------------------------------------------
  | Initializes DeleteSet 
  |--------------------------------------------------------------------------
  | Develover Tatiye.Net 2020
  | @Date Min 10 Apr 2022 04:17:48  WITA
  */
 function ttyDeletset(argument,token) {
    var segment =argument.split("/");
    var package ='package/'+argument.split("/").splice(0, 3).join("/")+'/send';
     jQuery.ajax({
       url: autoload,
       data: 'etc='+package+'&segment='+segment[3]+'&keyid='+token,
       type: "POST"
     });
  }
  /*
  |--------------------------------------------------------------------------
  | AND DeleteSet 
  |--------------------------------------------------------------------------
  */
   /*
   |--------------------------------------------------------------------------
   | Initializes title 
   |--------------------------------------------------------------------------
   | Develover Tatiye.Net 2020
   | @Date 
   */
   function instalPackage(key) {
        var dataID = 'token='+ key +'&etc=package/assets/View/instal';
        jQuery.ajax({
          url: autoload,
          data: dataID,
          type: "POST",
          success:function(data){
            // $("#install").html(data);
             netTopLoder('install','2%');
             var destroyLoader = setTimeout(function(){
                   location.reload();
              },3000);
          }
        });
   }
   /*
   |--------------------------------------------------------------------------
   | AND title 
   |--------------------------------------------------------------------------
   */
       function slide_menu() {
           var dataID = 'keyslide='+ slide +'&etc=package/assets/View/slide_menu';
            jQuery.ajax({
              url: autoload,
              data: dataID,
              type: "POST",
              success:function(data){
               var className = $('#wrapper').attr('class');
                if (className !=='is-active') {
                   $(".mcontainer").css({"margin-left": '10px'});
                } else {
                   $(".mcontainer").css({"margin-left": '300px'});
                }

              }
            });





       //$("#nugi").html('Helllo');
       //$(".mcontainer").css({"margin-left": '10px'});
    }
    function nightmode() {
          var dataID = 'keymode='+ mode +'&etc=package/assets/View/night_mode';
                  jQuery.ajax({
                    url: autoload,
                    data: dataID,
                    type: "POST",
                    success:function(data){
                        // $("#nugi").html(data);
                    }
                  });
    }

    /*
    |--------------------------------------------------------------------------
    | Initializes title 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date 
    */
    $(document).ready(function(){
         switch (slide) {
             case "is-collapse":
                  $(".mcontainer").css({"margin-left": '10px'});
                 break;
             default:
                 $(".mcontainer").css({"margin-left": '300px'});
         }
        
      
    });
    /*
    |--------------------------------------------------------------------------
    | AND title 
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | Initializes user 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date Kam 21 Apr 2022 04:12:40  WITA
    */
      $(document).ready(function(){
        var myfriend='';
        $.getJSON(hostName+"/api/chat/friendbox",
            function(data){
                $.each(data,function(index,value){
                    var desain= `
                     <a  onclick="tagGroup('${value.token}','${value.name}');" href="javascript:void(0);">
                         <div class="contact-avatar">
                             <img src="${value.picture}" alt="">
                             <span class="${value.online}"></span>
                         </div>
                         <div class="contact-username text-capitalize">${value.name}</div>
                     </a>
                    `;
                    myfriend+=desain;
                    $("#ChatGroupId").html('<hr class="-mx-4 my-4"><h4 class="bold"> Chat Group</h4>');
                    $("#contactavatar").html(myfriend);
                });
            });

      });
    /*
    |--------------------------------------------------------------------------
    | AND user 
    |--------------------------------------------------------------------------
    */


    /*
    |--------------------------------------------------------------------------
    | Initializes notifbox 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date Kam 21 Apr 2022 04:12:40  WITA
    */
      $(document).ready(function(){
        var myfriend='';
        $.getJSON(hostName+"/api/chat/notifbox",
            function(data){
                $.each(data,function(index,value){
                    var desain= `
           
                 <li class="un-read">
                        <a  onclick="tagGroup('${value.token}','${value.name}');" href="javascript:void(0);">
                            <div class="drop_avatar"> 
                            <img src="${value.picture}" alt="">
                            <span class="${value.online}"></span>

                            </div>
                            <div class="drop_text">
                                <strong> ${value.name} </strong> <time>${value.time}</time>
                                <p>${value.message} </p>
                            </div>
                        </a>
                    </li> 
                    `;
                    myfriend+=desain;
                    $("#notifbox").html(myfriend);
                    $(".belnotifboxchat").html('<span>1</span>');
                });
            });

      });
    /*
    |--------------------------------------------------------------------------
    | AND user 
    |--------------------------------------------------------------------------
    */


    /*
    |--------------------------------------------------------------------------
    | Initializes title 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date 
    */
    $(document).ready(function(){

        $.getJSON(hostName+"/api/assets/help",
            function(data){

                $.each(data.notif,function(index,value){
                    $("#help").html(value.bel);

                });
         });



    });
    /*
    |--------------------------------------------------------------------------
    | AND title 
    |--------------------------------------------------------------------------
    */
    function tagGroup(key,tgname) {
          netTopLoder('RealApp','20%');
          var dataID = 'tagKey='+key+'&tgname='+tgname+'&etc=package/chat/default';
          jQuery.ajax({
            url: autoload,
            data: dataID,
            type: "POST",
            success:function(data){
              $("#RealApp").html(data);
            }
          });
    }

    function messageGorup(key,tgname) {
          netTopLoder('RealApp','20%');
          var dataID = 'tagKey='+key+'&tgname='+tgname+'&etc=package/chat/View/messageGorup';
          jQuery.ajax({
            url: autoload,
            data: dataID,
            type: "POST",
            success:function(data){
              $("#RealApp").html(data);
            }
          });
       
    }


    /*
    |--------------------------------------------------------------------------
    | Initializes Notifications 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date Kam 28 Apr 2022 01:26:37  WITA
    */
    $(document).ready(function(){
        var myfriend='';
        $.getJSON(hostName+"/api/assets/notifications",
            function(data){
                $.each(data.records,function(index,value){
                    var desain= `
                      <li>
                         <a href="javascript:void(0);">
                             <div class="drop_avatar"> 
                                 <img src="${value.photo}" alt="">
                             </div>
                             <span class="drop_icon bg-gradient-primary">
                                 <i class="${value.icon}"></i>
                             </span>
                             <div class="drop_text">
                                 <p>
                                    <strong class="text-capitalize" >${value.name}</strong> 
                                    <dd class="text-link">${value.descrip}</dd>
                                 </p>
                                 <time>${value.date}</time>
                             </div>
                         </a>
                     </li>
                    `;
                    myfriend+=desain;
                    $("#notifications").html(myfriend);
                });

                $.each(data.notif,function(index,value){
                    $("#belnotif").html(value.bel);
                    $("#datanotif").html(value.data);

                });


            });





      });
    
    /*
    |--------------------------------------------------------------------------
    | AND Notifications 
    |--------------------------------------------------------------------------
    */
