
fetch('https://traininghshaar.herokuapp.com/')
.then(response => response.json())
.then(json => 
json.forEach(element => {
    
    var y= document.createElement('span');
    var content=`<div class="card,row" style="width:200px;text-align:center">
    <img class="card-img-top" src="xxx" alt="Card image" style="vertical-align:middle">
    <div class="card-body,col">
      <h5 class="card-title">yyy</h4>
      <p class="card-text">zzz  </p>
      <a href="nn" class="btn btn-primary">Download</a>
    </div>
  </div><br/><hr>`;
  var test= content.replace("xxx",element.img);
  test= test.replace("yyy",element.name);
  test= test.replace("zzz",element.author+"<br/>"+element.pages);
  test= test.replace("nn",element.link);
    y.innerHTML=test;
    
  document.getElementById('aya').appendChild(y);
    
}))