package com.java.softplan.repositories;

import com.java.softplan.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Boolean existsByCpf(String cpf);
    Usuario findByCpf(String cpf);
}
