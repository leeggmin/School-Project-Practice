package kr.project.sii.global.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ExceptionCode {

    DATE_PARSER(HttpStatus.BAD_REQUEST, "잘못된 날짜 형식"),
    ENCRYPT(HttpStatus.INTERNAL_SERVER_ERROR, "암호화 오류"),
    INVALID_PERMISSION(HttpStatus.BAD_REQUEST, "유효하지 않은 권한"),
    WEB_CLIENT_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "웹 클라이언트 통신 오류"),
    INTERNAL_SERVER(HttpStatus.INTERNAL_SERVER_ERROR, "서버 오류");

    private final HttpStatus status;
    private final String message;
}
