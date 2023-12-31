package kr.project.sii.global.error.exception;

import kr.project.sii.global.error.CustomException;
import kr.project.sii.global.error.ExceptionCode;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class EncryptException extends CustomException {

    public static final CustomException EXCEPTION =
            new EncryptException();

    private EncryptException() {
        super(ExceptionCode.ENCRYPT);
    }
}
