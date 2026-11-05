(function(){
  var form=document.getElementById("bookingForm");
  if(!form)return;
  var date=document.getElementById("d");
  var today=new Date(); var local=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
  date.min=local;
  form.addEventListener("submit",function(e){
    e.preventDefault();
    if(!form.reportValidity())return;
    var val=function(id){return document.getElementById(id).value.trim()};
    var message="Hello, I would like to request an appointment at Balajii Eye Care and Opticals.%0A";
    var lines=[
      "Name: "+val("n"),
      "Phone: "+val("p"),
      "Preferred date: "+val("d"),
      "Preferred time: "+val("t"),
      "Reason: "+val("r"),
      "Additional message: "+(val("msg")||"Not provided")
    ];
    var url="https://wa.me/919759782626?text="+encodeURIComponent("Hello, I would like to request an appointment at Balajii Eye Care and Opticals.\n\n"+lines.join("\n")+"\n\nPlease confirm availability. Thank you.");
    window.open(url,"_blank","noopener");
  });
})();