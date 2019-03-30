$(function(){
 /*
 $(".imp").click(function(){
  $("body").append('<div id="bg">');
  $(".modal").fadeIn(300);
 });
 */

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
   var ans1 = "ヤコブ";
   var ans2 = "エリヤ";
   var ans3 = "ペトロ";
   var sum = 0;
   if($("#q1").val() === ans1){
    sum += 1;
   }
   if($("#q2").val() === ans2){
    sum += 1;
   } 
   if($("#q3").val() === ans3){
    sum += 1;
   }
   $("body").append('<div id="ans"><span id="anscol">' + sum + '</span>/3</div>');
   if(sum === 0){
    $("body").append('<div id="comment">聖書をもっと勉強しましょう〜！</div>');
   }else if(sum === 1){
　　$("body").append('<div id="comment">まあまあだね</div>');
   }else if(sum === 2){
    $("body").append('<div id="comment">なかなかやりますね！</div>');
   }else{
    $("body").append('<div id="comment">マジヤベェ</div>');
   }
   $("#comment").hide();
   $("#ans").hide();
   
   $("#comment").fadeIn();
   $("#ans").fadeIn();
   
  }
 });
});
