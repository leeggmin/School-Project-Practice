package kr.project.sii.global.config.webclient.template;

import kr.project.sii.domain.image.dto.KarloReq;
import kr.project.sii.domain.image.dto.KarloRes;
import kr.project.sii.global.config.webclient.WebClientUtil;
import kr.project.sii.global.properties.KakaoProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KakaoWebClientTemplate {

    private final WebClientUtil webClientUtil;
    private final KakaoProperties kakaoProperties;

    public KarloRes karlo(KarloReq karloReq) {
        return webClientUtil.post(
                kakaoProperties.getUrl(),
                karloReq,
                KarloRes.class
        ).getBody();
    }
}
