function valform()
    {
             if(document.fillform.sms.value == '') 
             {      
            alert("Don't forget to leave a message!");
              document.fillform.sms.focus();
            return false;       
            }
             else if(document.fillform.fname.value == '')
             {      
            alert("Please enter your name!");
              document.fillform.fname.focus();
            return false;       
            }
        else if(document.fillform.flastname.value == '')
             {      
            alert("Please enter your last name");
              document.fillform.flastname.focus();
            return false;       
            }
             else
               return true;
    }