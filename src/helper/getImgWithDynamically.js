const getImgWidthDynamically = (imgWidth, declaredBodyFontSize) => {
  //Get the body value of font size
  let body = document.body;
  let elementStyle = window.getComputedStyle(body);
  let bodyFontSizeInPx = elementStyle.getPropertyValue('font-size');
  //Delete PX and make it float
  const bodyFontSizeParsed = parseFloat(bodyFontSizeInPx, 10);
  //Divide the actual value of the body font size to the declared font size in SASS
  const htmlFontSize = bodyFontSizeParsed / declaredBodyFontSize;
  //dive that by the multiplier of the font which is the REM measure value
  const imgCorrectWithMultiplier = htmlFontSize / 10;
  const dynamicWidth = imgCorrectWithMultiplier * imgWidth;
  return dynamicWidth;
}

export default getImgWidthDynamically;