import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadPDF = (tabId: number) => {
  const input = document.getElementById(`content_${tabId}`)!;
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg");
    let imgWidth = 208;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdf = new jsPDF();
    pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
    pdf.save("download.pdf");
  });
};

export const sharePdf = (tabId: number, email: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      alert(`PDF for Analysis ${tabId} sent to ${email}`);
      resolve(true);
    }, 2000);
  });
};
