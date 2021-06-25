
fetch('https://traininghshaar.herokuapp.com/')
.then(response => response.json())
.then(json => 
json.forEach(element => {
    
    var y= document.createElement('span');
    var content=`<div class="card,row" style="width:400px;text-align:center;margin-left:150px;">
    <img class="card-img-top" src="xxx" alt="Card image" style="vertical-align:middle"><br/><br/>
    <div class="card-body,col">
      <strong><p class="card-title">yyy</p></strong>
      <strong><p class="card-text">zzz  </p></strong>
      <a href="nn" class="btn btn-primary" style="width:300px;font-size:30px">Download</a>
    </div>
  </div><br/><p style=" margin-left: -10px;margin-right: -10px ; border: 5px solid rgb(181,101,29)"></p>`;
  var test= content.replace("xxx",element.img);
  test= test.replace("yyy",element.name);
  test= test.replace("zzz",element.author+"<br/>"+element.pages);
  test= test.replace("nn",element.link);
    y.innerHTML=test;
    
  document.getElementById('book').appendChild(y);
    
}))