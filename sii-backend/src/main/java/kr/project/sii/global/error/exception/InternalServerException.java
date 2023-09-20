package kr.project.sii.global.error.exception;

import kr.project.sii.global.error.CustomException;
import kr.project.sii.global.error.ExceptionCode;

public class InternalServerException extends CustomException {

    public static final CustomException EXCEPTION =
            new InternalServerException();

    private InternalServerException() {
        super(ExceptionCode.INTERNAL_SERVER);
    }
}
