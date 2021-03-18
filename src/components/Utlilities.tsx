import { useState } from "react";
import { downloadPDF } from "../services/pdf-service";
import SharePdfForm from "./SharePdfForm";

type UtilitiesComponent = {
  tabId: number;
};
const Utilities: React.FC<UtilitiesComponent> = ({ tabId }) => {
  const [sharePDF, setSharePDF] = useState(false);
  return (
    <aside id="utilities">
      {sharePDF ? (
        <SharePdfForm
          tabId={tabId}
          onShareSuccess={() => {
            setSharePDF((p) => false);
          }}
          onShareFail={() => {
            setSharePDF((p) => true);
          }}
        />
      ) : (
        <>
          <button onClick={() => downloadPDF(tabId)}>Generate PDF</button>

          <button onClick={() => setSharePDF((p) => true)}>Share PDF</button>
        </>
      )}
    </aside>
  );
};

export default Utilities;
