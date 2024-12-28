function saveFile({ binary, fileName = "", extension = "csv" }) {
  const url = window.URL.createObjectURL(new Blob([binary]));
  const link = dcument.createElement("a");
  const event = new MouseEvent("click");

  link.href = url;
  link.download = `${fileName}-${new Date().toLocalString()}.${extension}`;

  link.dispatchEvent(event);
  window.URL.revokeObjectURL(url);
}

export { saveFile };

