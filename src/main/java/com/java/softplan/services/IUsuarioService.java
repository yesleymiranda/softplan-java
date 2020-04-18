package com.java.softplan.services;

import com.java.softplan.models.Usuario;


public interface IUsuarioService {

    Usuario cadastrar(Usuario usuarioParaCadastro);

    Usuario buscarPorId(Long id);

    void atualizar(Long id, Usuario usuarioAtualizada);

    void deletar(Long id);
}
