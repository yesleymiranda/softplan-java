package com.java.softplan.services;


import com.java.softplan.exceptions.CpfExistenteException;
import com.java.softplan.exceptions.IdNaoExistente;
import com.java.softplan.models.Usuario;
import com.java.softplan.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private UsuarioRepository repository;


    @Override
    public Usuario cadastrar(Usuario usuarioParaCadastro) {
        removerMascaraCPF(usuarioParaCadastro);
        validarCpfExistente(usuarioParaCadastro.getCpf());
        usuarioParaCadastro.setDataCadastro(new Date());
        return repository.save(usuarioParaCadastro);
    }

    @Override
    public Usuario buscarPorId(Long id) {
        validarIdExiste(id);
        return repository.findById(id).get();
    }

    @Override
    public void atualizar(Long id, Usuario usuarioAtualizada) {
        validarIdExiste(id);
        removerMascaraCPF(usuarioAtualizada);
        validarAtualizacaoCpf(usuarioAtualizada.getCpf(), id);
        Optional<Usuario> pessoa = repository.findById(id);
        usuarioAtualizada.setDataCadastro(pessoa.get().getDataCadastro());
        usuarioAtualizada.setDataAtualizacao(new Date());
        usuarioAtualizada.setId(id);
        repository.save(usuarioAtualizada);
    }

    @Override
    public void deletar(Long id) {
        validarIdExiste(id);
        repository.deleteById(id);
    }

    private void validarAtualizacaoCpf(String cpf, Long id) {
        Usuario usuario = repository.findByCpf(cpf);
        if(usuario != null && !usuario.getId().equals(id)){
            throw new CpfExistenteException();
        }
    }

    private void validarIdExiste(Long id) {
        if(!repository.existsById(id)){
            throw new IdNaoExistente();
        }
    }

    private void validarCpfExistente(String cpf) {
        if(repository.existsByCpf(cpf)){
            throw new CpfExistenteException();
        }
    }

    private void removerMascaraCPF(Usuario usuario) {
        String cpf = usuario.getCpf();
        cpf = cpf.replaceAll("\\D", "");
        usuario.setCpf(cpf);
    }
}
