import Modal from "./Modal";
import ModalBody from "./components/ModalBody";
import ModalHeader from "./components/ModalHeader";
import ModalFooter from "./components/ModalFooter";
import styles from "./assets/ModalRoot.module.css"

export default function TestModal(props) {
  return (
    <Modal>

      <ModalHeader>
        <h3 style={{color: "#053245", margin: "auto", marginTop: "127px"}}>Incluir Dependente</h3>
      </ModalHeader>

      <ModalBody>
        <center><input style={{ width:"436px", borderRadius: "5px", border: "1px solid #BCBCBC", boxSizing: "border-box", marginTop: "15px"}} placeholder={"Token de Cadastro"}></input></center>
      </ModalBody>

      <ModalFooter>
        <button onClick={ props.close } style = {{margin: "auto", width: "243px",height: "44px",background: "#6E6E6E", border: "1px solid #BCBCBC", boxSizing: "border-box", borderRadius: "5px", marginBottom: "133px"}}><span style = {{color: "white"}}>Salvar</span></button>
      </ModalFooter>

    </Modal>
  );
}