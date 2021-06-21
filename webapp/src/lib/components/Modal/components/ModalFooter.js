export default function ModalFooter(props) {
        return (
          <div className="modal-footer border-0">
            { props.children }
            <div style={{position: "relative", width: "495px", height: "17px", margin: "auto", left: "5px", bottom: "-9.5px", background: " #6F6F6F", boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)", borderRadius: "14px 14px 0px 0px"}}>
            </div>
          </div>

        );
      }