const changeImage = () => {
  var image = document.getElementById('myImage');
  if (image.src.match("on")) {
    image.src = "lighthouse-off.png";
  } else {
    image.src = "lighthouse-on.png";
  }
}

const Lighthouse = () => {

  return (
    <img src="lighthouse-on.png" height="464" onClick={changeImage} id="myImage" />
  )
}

export default Lighthouse;