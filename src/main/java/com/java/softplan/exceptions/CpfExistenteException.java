package com.java.softplan.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "CPF já existente na base dados")
public class CpfExistenteException extends RuntimeException{
}
