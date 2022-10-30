

const api = {
    key:  process.env.EIA_API_KEY,
    baseurl: "https://api.eia.gov/v2/petroleum/",
  };


  var dropbox1val, dropbox2val, dropbox3val;
 dropbox1val = document.getElementsByID('DropBox1')[0];
 dropbox1va2 = document.getElementsByID('DropBox2')[0];
 dropbox1va3 = document.getElementsByID('DropBox3')[0];
 submitButton = document.getElementsByID('submitButton')[0];

//  if (serachbox) {
//     serachbox.addEventListener('onSubmit', setQuery);
//  }

// function setQuery(){
//     fetchFunction(keyword1,keyword2,keyword3)
// }


 var keyword1, keyword2, keyword3;
// get drop box 1 val
  if(dropbox1val == "Petroleum"){
    keyword1 = "petroleum";
 }  else if(dropbox1val == "Natural Gas"){
    keyword1 = "natural-gas";
 } 
// get drop box 2 val
if(dropbox2val == "Summary" && dropbox1val == "Petroleum")
    {keyword2 = "sum";}
else if(dropbox2val == "Crude Reserves and Production" && dropbox1val == "Petroleum")
    {keyword2 = "crd";}    
else if(dropbox2val == "Summary" && dropbox1val == "Natural Gas")
    {keyword2 = "sum";}
else if(dropbox2val == "Production" && dropbox1val == "Natural Gas")  
    {keyword2 = "prod";} 

//  get drop box 3 val
if(dropbox2val == "Summary" && dropbox1val == "Natural Gas"&& dropboxval3 == "Natural Gas Summary")
    {keyword3 = "lsum";}
if(dropbox2val == "Production" && dropbox1val == "Natural Gas" && dropboxval3 == "Number Of Gas Producing Oil Wells")  
    {keyword3 = "oilwells";} 
if(dropbox2val == "Production" && dropbox1val == "Natural Gas"&& dropboxval3 == "Natural Gas Plant Processing")  
    {keyword3 = "pp";} 
if(dropbox2val == "Summary" && dropbox1val == "Petroleum"&& dropboxval3 == "U.S. Crude Oil Supply & Disposition")
    {keyword3 = "crdsnd";}
if(dropbox2val == "Summary" && dropbox1val == "Petroleum"&& dropboxval3 == "Supply And Disposition")
    {keyword3 = "snd";} 
if(dropbox2val == "Crude Reserves and Production" && dropbox1val == "Petroleum"&& dropboxval3 == "Crude Oil Production")
    {keyword3 = "crpdn";}
if(dropbox2val == "Crude Reserves and Production" && dropbox1val == "Petroleum"&& dropboxval3 == "Crude Oil And Natural Gas Drilling Activity")
    {keyword3 = "drill";}

export {keyword1,keyword2,keyword3};







//   const serachbox = document.getElementsByClassName('search-bar')[0];
// if (serachbox) {
//    serachbox.addEventListener('keypress', setQuery);
// } else {
//   console.log("nothin in searchbox");
// }