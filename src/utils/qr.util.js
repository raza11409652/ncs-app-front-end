export const copyToClipboard = (response) => {
  navigator.clipboard.writeText(response.shortUrl);
  //   notifySuccess("Link copied success");
};

/**
 * Download bas64 image to PNG on click
 * @param base64Data
 */

export const downloadBase64File = (base64Data) => {
  const linkSource = `${base64Data}`;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = "qr_" + new Date().getTime() + ".png";
  downloadLink.click();
  // notifySuccess("Link copied success");
};
