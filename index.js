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
   $("body").append('<div id="ans"><span id="anscol"></span>/3</div>');
   $("body").append('<div id="comment">');
   $("#comment").hide();
   $("#ans").hide();
   $("#anscol").text(sum);
   if(sum === 0){
    $("#comment").text('聖書をもっと勉強しましょう〜！');
   }else if(sum === 1){
　　$("#comment").text('まあまあだね');
   }else if(sum === 2){
    $("#comment").text('なかなかやりますね！');
   }else{
    $("#comment").text('マジヤベェ');
   }
   $("#comment").fadeIn(1000);
   $("#ans").fadeIn(1000);
   
  }
 });
});
