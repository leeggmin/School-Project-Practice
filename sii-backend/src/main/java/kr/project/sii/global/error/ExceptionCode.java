package kr.project.sii.global.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ExceptionCode {

    RESOURCE_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 데이터"),
    DATE_PARSER(HttpStatus.BAD_REQUEST, "잘못된 날짜 형식"),
    INVALID_PERMISSION(HttpStatus.BAD_REQUEST, "유효하지 않은 권한"),
    ENCRYPT(HttpStatus.INTERNAL_SERVER_ERROR, "암호화 오류"),
    WEB_CLIENT_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "웹 클라이언트 통신 오류"),
    INTERNAL_SERVER(HttpStatus.INTERNAL_SERVER_ERROR, "서버 오류");

    private final HttpStatus status;
    private final String message;
}
