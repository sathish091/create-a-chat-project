$(document).ready(function(){

    $('#submit').click(function(){

      if ($('.form').parsley().validate()) 
            {

            	var user_name=$('#signup_name').val();
            	console.log(user_name);
            	var user_email=$('#signup_email').val();
            	var user_password=$('#signup_password').val();
                var user_date=$('#signup_date').val();
                var user_gender=$("input[name='gender']:checked"). val();
                if(user_gender){
                    true;
                }
                  console.log(user_gender);
                var user_data=
                    {
                    	name:user_name,
                    	email:user_email,
                    	password:user_password,
                    	date:user_date,
                    	gender:user_gender 
                    };
                    	console.log(user_data);

              $.ajax ({
                	     url:'/signup',
                	     dataType:"json",
                	     type:'post',
                	     data:user_data,
                	     success:function(data)
                	      {
                		    location.href(data);
                		    console.log(data);
                	      }
                      });
            } 
                else{
	                 console.log('signup page in not correct');
                    }
    });
});


  