$(function(){
 $("#decide").click(function(){
  var flag = 0;
  $(".errorbg").each(function(){$(this).removeClass("errorbg");});
  $(".errorcol").text("");
  $(".imp").each(function(){
   if($(this).val() === ""){
    flag -= 1;
    $(this).addClass("errorbg").after('<span class="errorcol">※</span>');
   }
  });

  if(flag < 0){
   $("#error").text("※どこか記入していない箇所があります").addClass("errorcol");
  }else{
   $("#question-area").fadeOut(500);
   $("h1").fadeOut(500,function(){$("h1").text("正解した数は！？");});
   $("h1").fadeIn(500);
  }
 });
});
