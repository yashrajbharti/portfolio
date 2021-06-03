$(".txtb input").on("focus",function(){
  $(this).addClass("focus");
});
$(".txtb input").on("blur",function(){
  if($(this).val()=="")
  $(this).removeClass("focus");
});


function sendEmail()
{
    window.location = "mailto:hrithik.yashrajbharti@gmail.com";
}
