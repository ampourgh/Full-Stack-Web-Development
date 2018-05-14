function b64toBlob(b64Data, contentType, sliceSize) {
  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    var byteArray;

    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

var stripped = base64val.slice(22);
var blob = b64toBlob(stripped, 'image/png');
var blobUrl = URL.createObjectURL(blob);
var img = document.getElementById('gravatar');
img.src = blobUrl;
