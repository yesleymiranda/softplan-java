import React, {useState} from "react";
import {postUsuarioCadastrar, putUsuarioAlterar} from "../../services/Usuario";

const Cadastro = ({toggleModal, setReload, usuario}) => {

  const [form, setForm] = useState(usuario || {
    nome: "",
    email: "",
    sexo: "",
    naturalidade: "",
    dataNascimento: "",
    nacionalidade: "",
    cpf: ""
  });

  const handlerChange = event => {
    setForm({...form, [event.target.name]: event.target.value});
  };

  const handlerSave = async () => {

    try {
      if (form.id) {
        await putUsuarioAlterar(form);
      } else {
        await postUsuarioCadastrar(form);
      }

      setForm({});
      setReload(new Date().toDateString());
      toggleModal();
    } catch (e) {
      console.log("Cadastro usuário", e);
    }

  };

  return (
      <div className="bg-dark vh-100 fixed-top">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Novo usuário</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              {form && form.id &&
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"># Código</span>
                </div>
                <input type="text" className="form-control" name="nome" onChange={handlerChange} value={form.id} disabled/>
              </div>
              }

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Nome</span>
                </div>
                <input type="text" className="form-control" name="nome" onChange={handlerChange} value={form.nome}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">E-mail</span>
                </div>
                <input type="email" className="form-control" name="email" onChange={handlerChange} value={form.email}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Data Nascimento</span>
                </div>
                <input type="date" className="form-control" name="dataNascimento" onChange={handlerChange}
                       value={form.dataNascimento}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Sexo</span>
                </div>
                <input type="text" className="form-control" name="sexo" onChange={handlerChange}
                       value={form.sexo}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Naturalidade</span>
                </div>
                <input type="text" className="form-control" name="naturalidade" onChange={handlerChange}
                       value={form.naturalidade}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Nacionalidade</span>
                </div>
                <input type="text" className="form-control" name="nacionalidade" onChange={handlerChange}
                       value={form.nacionalidade}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">CPF</span>
                </div>
                <input type="text" className="form-control" name="cpf" onChange={handlerChange} value={form.cpf}/>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={toggleModal}>Cancelar</button>
              <button type="button" className="btn btn-success" onClick={handlerSave}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cadastro;
