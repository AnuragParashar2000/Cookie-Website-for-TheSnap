Cookies.set("Name", "TheSnap",{expires : 30});
function validate()
{
    var asdfghjkl=document.getElementById("asdfghjkl").value;
    if(asdfghjkl == "VGhlU25hcA==")
    {
       alert("Correct");
       return false; 
    }
    else
    {
        alert("try again");
        windows.reload();
    }
}