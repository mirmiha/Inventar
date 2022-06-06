import { Product } from "../api";
import QRCode from "react-qr-code";

export default function ProductQRCode(props: { product: Product | null }) {
  return (
    <div id="qr-modal" className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">QR Code</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.product && (
              <QRCode
                value={`Ime Produkta: ${props.product?.name}
                Serijska Stevilka: ${props.product?.serijskaStevilka}
                Stevilka Inventarja: ${props.product?.stevilkaInventarja}
                Datum: ${props.product?.datum}
                Naziv: ${props.product?.model}
                Kategorija: ${props.product?.category?.name}
                Zaposlen: ${props.product?.supplier?.name}`}
              />
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
