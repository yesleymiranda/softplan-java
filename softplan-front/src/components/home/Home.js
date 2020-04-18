import React, {useEffect, useState} from "react";
import {deleteUsuarioRemover, getUsuarioListar} from "../../services/Usuario";
import Cadastro from "./Cadastro";

const Home = () => {
  const [reload, setReload] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  let [usuario, setUsuario] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const start = async () => {
      const response = await getUsuarioListar();
      setUsuarios(response);
    };

    start().then();
  }, [reload]);


  const editarUsuario = async (selecionado) => {
    await setUsuario(usuario = selecionado);
    toggleModal(true);
  };

  const novoUsuario = async () => {
    await setUsuario(null);
    toggleModal(true);
  };

  const _renderItens = (item, index) => {
    return (
        <tr key={index}>
          <th>{item.id}</th>
          <th>{item.nome}</th>
          <th>{item.email}</th>
          <th>{item.dataNascimento}</th>
          <th>{item.sexo}</th>
          <th>{item.naturalidade}</th>
          <th>{item.nacionalidade}</th>
          <th>{item.cpf}</th>

          <th>
            <button className="btn btn-sm btn-danger mr-1" onClick={() => removerUsuario(item.id)}>
              Remover
            </button>

            <button className="btn btn-sm btn-primary" onClick={() => editarUsuario(item)}>
              Alterar
            </button>
          </th>
        </tr>
    );
  };

  const removerUsuario = async id => {
    await deleteUsuarioRemover(id);
    setReload(id.toString());
  };

  const toggleModal = (visible) => {
    setShowModal(visible);
  };

  return (
      <div>

        <nav className="nav mb-1 bg-dark p-3">
          <h4 className="text-white nav-link">Usuários</h4>
          <button className="btn btn-success" onClick={novoUsuario}>Novo</button>
        </nav>

        <div className="container-fluid" style={{fontSize: 14}}>

          <table className="table table-sm table-striped">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Data Nascimento</th>
              <th scope="col">Sexo</th>
              <th scope="col">Naturalidade</th>
              <th scope="col">Nacionalidade</th>
              <th scope="col">Cpf</th>
              <th scope="col">Ações</th>
            </tr>
            </thead>
            <tbody>
            {usuarios && usuarios.length > 0 &&
            usuarios.map((item, index) => _renderItens(item, index))}
            </tbody>
          </table>
        </div>

        {showModal &&
        /** Modal de cadastro de novo/alterar usuário **/
        <Cadastro toggleModal={() => toggleModal(false)} setReload={setReload} usuario={usuario}/>
        }


      </div>
  );
};

export default Home;

