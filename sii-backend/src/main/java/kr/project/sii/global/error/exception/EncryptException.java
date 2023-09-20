package kr.project.sii.global.error.exception;

import kr.project.sii.global.error.CustomException;
import kr.project.sii.global.error.ExceptionCode;

public class EncryptException extends CustomException {

    public static final CustomException EXCEPTION =
            new EncryptException();

    private EncryptException() {
        super(ExceptionCode.ENCRYPT);
    }
}
