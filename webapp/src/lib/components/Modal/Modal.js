export default function Modal(props) {
  return (
    <div className="modal d-block">
      <div className="modal-dialog" style={{ position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <div className="modal-content" style={{ width: "665px", height : "485px", borderRadius: "17px"}}>
          { props.children }
        </div>
      </div>
    </div>
  );
}