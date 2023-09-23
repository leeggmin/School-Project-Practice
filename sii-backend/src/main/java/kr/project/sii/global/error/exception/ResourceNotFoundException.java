package kr.project.sii.global.error.exception;

import kr.project.sii.global.error.CustomException;
import kr.project.sii.global.error.ExceptionCode;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends CustomException {

    public static final CustomException EXCEPTION =
            new ResourceNotFoundException();

    public ResourceNotFoundException() {
        super(ExceptionCode.RESOURCE_NOT_FOUND);
    }
}
