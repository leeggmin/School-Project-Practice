package kr.project.sii.global.error.exception;

import kr.project.sii.global.error.CustomException;
import kr.project.sii.global.error.ExceptionCode;

public class WebClientException extends CustomException {

    public static final CustomException EXCEPTION =
            new WebClientException();

    private WebClientException() {
        super(ExceptionCode.WEB_CLIENT_ERROR);
    }
}
