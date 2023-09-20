package kr.project.sii.global.error.exception;

import kr.project.sii.global.error.CustomException;
import kr.project.sii.global.error.ExceptionCode;

public class DateParserException extends CustomException {

    public static final CustomException EXCEPTION =
            new DateParserException();

    private DateParserException() {
        super(ExceptionCode.DATE_PARSER);
    }
}
