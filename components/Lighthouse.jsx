const changeImage = () => {
  var image = document.getElementById('myImage');
  if (image.src.match("on")) {
    image.src = "lighthouseoff.jpg";
  } else {
    image.src = "lighthouseon.png";
  }
}

const Lighthouse = () => {

  return (
    <img src="lighthouseon.png" width="601" height="464" onClick={changeImage} id="myImage" />
  )
}

export default Lighthouse;