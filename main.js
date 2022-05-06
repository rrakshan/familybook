var images = ["a.jpeg","20210524_211924.jpg", "20210524_144345.jpg" , "IMG-20210524-WA0001.jpg", "IMG-20210317-WA0006.jpg"];
var names = ["Family Book","D.Ramesh", "K.Vishaka Priya", "R.Rakshan", "R.Krithik"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
