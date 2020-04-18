package com.java.softplan.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Id informado não existe")
public class IdNaoExistente extends RuntimeException {
}
