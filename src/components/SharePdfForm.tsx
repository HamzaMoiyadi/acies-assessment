import { useState } from "react";
import { sharePdf } from "../services/pdf-service";
type SharePdfFormComponent = {
  tabId: number;
  onShareSuccess: () => void;
  onShareFail: () => void;
};
const SharePdfForm: React.FC<SharePdfFormComponent> = ({
  tabId,
  onShareSuccess,
  onShareFail,
}) => {
  const [sharing, setSharing] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <form
      id="share_pdf_form"
      onSubmit={async (event) => {
        event.preventDefault();
        try {
          setSharing((s) => true);
          await sharePdf(tabId, email);
          onShareSuccess();
        } catch (e) {
          onShareFail();
        } finally {
          setSharing((s) => false);
        }
      }}
    >
      <label htmlFor="share_pdf_input">
        Enter the email to send the pdf to
      </label>
      <input
        type="email"
        placeholder="eg. yourname@acies.com"
        id="share_pdf_input"
        onChange={(event) => {
          setEmail((e) => (e = event.target.value));
        }}
      />
      <button type="submit" className="small">
        {sharing ? "Sharing" : "Share"}
      </button>
    </form>
  );
};

export default SharePdfForm;
