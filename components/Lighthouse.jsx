import styled from 'styled-components'

const Img = styled.img`
max-width: 100%;
max-height: 100vh;
height: auto;
`

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
    <Img src="lighthouseon.png" onClick={changeImage} id="myImage" />
  )
}

export default Lighthouse;