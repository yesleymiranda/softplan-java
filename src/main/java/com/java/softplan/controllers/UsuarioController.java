package com.java.softplan.controllers;

import com.java.softplan.models.Usuario;
import com.java.softplan.repositories.UsuarioRepository;
import com.java.softplan.services.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@CrossOrigin
@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    @Autowired
    private IUsuarioService service;

    @Autowired
    private UsuarioRepository repository;

    @GetMapping(value = "/listar")
    public List<Usuario> listarUsuarios() {
        List<Usuario> usuarios = repository.findAll();
        usuarios.forEach(usuario -> usuario.add(linkTo(methodOn(UsuarioController.class)
                .buscarUsuario(usuario.getId()))
                .withRel("Listar dados do usuário"))
        );
        return usuarios;
    }

    @GetMapping(value = "{id}")
    public Usuario buscarUsuario(@PathVariable("id") Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping(value = "/cadastrar")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario cadastrar(@RequestBody @Valid Usuario usuarioCadastrar) {
        Usuario usuario = service.cadastrar(usuarioCadastrar);

        usuario.add(linkTo(methodOn(UsuarioController.class)
                .listarUsuarios())
                .withRel("Listar usuários cadastrados"));

        usuario.add(linkTo(methodOn(UsuarioController.class)
                .buscarUsuario(usuario.getId()))
                .withRel("Listar dados do usuário"));

        return usuario;
    }

    @PutMapping(value = "/atualizar/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void atualizar(@PathVariable("id") Long id, @RequestBody @Valid Usuario usuario) {
        service.atualizar(id, usuario);
    }

    @DeleteMapping("/deletar/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletar(@PathVariable("id") Long id) {
        service.deletar(id);
    }
}
