package kr.project.sii.global.error.exception;

import kr.project.sii.global.error.CustomException;
import kr.project.sii.global.error.ExceptionCode;

public class InvalidPermissionException extends CustomException {

    public static final CustomException EXCEPTION =
            new InvalidPermissionException();

    private InvalidPermissionException() {
        super(ExceptionCode.INVALID_PERMISSION);
    }
}
