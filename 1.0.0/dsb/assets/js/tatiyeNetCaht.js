    /*
    |--------------------------------------------------------------------------
    | Initializes Pusher Confi
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date Sab 07 Mei 2022 05:45:14  WITA
    */
    Pusher.logToConsole = false;
    var pusher = new Pusher('47dcbf2b14c5bd43483e', {
      cluster: 'ap1'
    });
    /*
    |--------------------------------------------------------------------------
    | Initializes Send 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date Sab 07 Mei 2022 05:45:14  WITA
    */
    function tagGroupSend(segment,uid) {
          message = $("#message").val(); 
          var dataID = 'message='+ message +'&uid='+uid+'&etc=package/chat/View/message'+'&segment='+segment;
          jQuery.ajax({
            url: autoload,
            data: dataID,
            type: "POST",
            success:function(data){
               message = $("#message").val(''); 
            }
          });
    }

    function tagGroupDelete(segment,uid) {
          var dataID ='uid='+uid+'&etc=package/chat/View/message'+'&segment='+segment;
          jQuery.ajax({
            url: autoload,
            data: dataID,
            type: "POST",
            success:function(data){
               $("#bodymessage").html('');
                
            }
          });
    }
    /*
    |--------------------------------------------------------------------------
    | Initializes my-channel 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date Sab 07 Mei 2022 05:45:14  WITA
    */
    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
        senbox();
        friendbox();
        notifbox();
        chatAudio(data.token,data.tokensend);
         $('#soudNotif'+data.token)[0].play();
        
    });

    /*
    |--------------------------------------------------------------------------
    | Initializes my-channel 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date Sab 07 Mei 2022 05:45:14  WITA
    */
    var group = pusher.subscribe('my-group');
    group.bind('my-group', function(data) {
        senboxGroup();
        friendboxGroup();
        friendbox();
        // notifbox();
         chatAudiohelper(data.token,data.tokensend);
         $('#NotifSoud')[0].play();
        
    });



    /*
    |--------------------------------------------------------------------------
    | Initializes my-channel 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date Sab 07 Mei 2022 05:45:14  WITA
    */
    var channel = pusher.subscribe('my-channel-sendBoxdelete');
    channel.bind('my-event-sendBoxdelete', function(data) {
        senbox();
        friendbox();
        notifbox();
        chatAudio(data.token,data.tokensend);
         $('#soudNotif'+data.token)[0].play();
        
    });

     function notifbox() {
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
                   

                });
            });

    }






    function chatAudiohelper(token,uid) {
        // $("#belnotifboxchat"+uid).html('<span>1</span>');
        $('<audio id="NotifSoud"><source src="'+hostName+'/wolf05/template/dashboard/package/chat/View/soud/notif.ogg" type="audio/ogg"><source src="'+hostName+'/wolf05/template/dashboard/package/chat/View/soud/notif.mp3" type="audio/mpeg"><source src="'+hostName+'/wolf05/template/dashboard/package/chat/View/soud/notif.wav" type="audio/wav"></audio>').appendTo('.soud');
    }

    /*
    |--------------------------------------------------------------------------
    | Initializes chatAudio 
    |--------------------------------------------------------------------------
    | Develover Tatiye.Net 2020
    | @Date 
    */
    function chatAudio(token,uid) {
        $("#belnotifboxchat"+uid).html('<span>1</span>');
        $('<audio id="soudNotif'+token+'"><source src="'+hostName+'/wolf05/template/dashboard/package/chat/View/soud/notif.ogg" type="audio/ogg"><source src="'+hostName+'/wolf05/template/dashboard/package/chat/View/soud/notif.mp3" type="audio/mpeg"><source src="'+hostName+'/wolf05/template/dashboard/package/chat/View/soud/notif.wav" type="audio/wav"></audio>').appendTo('.soud');
    }
    /*
    |--------------------------------------------------------------------------
    | AND title 
    |--------------------------------------------------------------------------
    */
function friendbox() {
    var friendbox='';
    $.getJSON(hostName+"/api/chat/friendbox",
        function(data){
            $.each(data,function(index,value){
                var desain= `
                 <li>
                   <a  onclick="tagGroup('${value.token}','${value.name}');" href="javascript:void(0);">
                        <div class="message-avatar">
                         <img src="${value.picture}" alt="">
                         <span class="${value.online}"></span>
                        </div>

                        <div class="message-by">
                            <div class="message-by-headline">
                                <h5>${value.name}</h5>
                                <span>${value.time}</span>
                            </div>
                            <p>${value.message}</p>
                        </div>
                    </a>
                </li>`;
                friendbox+=desain;
                $("#friendbox").html(friendbox);
            });
        });
}
function friendboxGroup() {
    var helper='';
    $.getJSON(hostName+"/api/chat/group",
        function(data){
            $.each(data,function(index,value){
                var desain= `
                 <li>
                    <a onclick="messageGorup('${value.token}','${value.name}');" href="javascript:void(0);">
                        <div class="message-avatar">
                         <img src="${value.photo}" alt="">
                         <span class="${value.online}"></span>
                        </div>

                        <div class="message-by">
                            <div class="message-by-headline">
                                <h5>${value.name}</h5>
                                 <span>${value.time}</span>
                              
                            </div>
                            <p>${value.message}</p>
                        </div>
                    </a>
                </li>`;
                helper+=desain;
                $("#helper").html(helper);
            });
        });

}