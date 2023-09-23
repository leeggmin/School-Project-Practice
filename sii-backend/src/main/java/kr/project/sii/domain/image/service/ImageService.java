package kr.project.sii.domain.image.service;

import kr.project.sii.domain.image.dto.KarloReq;
import kr.project.sii.domain.image.dto.KarloRes;
import kr.project.sii.global.config.webclient.template.KakaoWebClientTemplate;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageService {

    private final KakaoWebClientTemplate kakaoWebClientTemplate;

    public String generateImage(KarloReq req) {

        return kakaoWebClientTemplate.karlo(req).getImages().get(0).getImage();

//        try {
//            // 이미지 URL 가져오기
//            String imageUrl = response.getImages().get(0).getImage();
//            System.out.println(imageUrl);
//
//            // URL로부터 이미지 가져오기
//            URL url = new URL(imageUrl);
//            BufferedImage image = ImageIO.read(url);
//
//            if (image != null) {
//                // 이미지 처리
//                // 여기에서 원하는 작업을 수행할 수 있습니다.
//                // 예를 들어, 이미지를 화면에 표시하거나 파일로 저장할 수 있습니다.
//            } else {
//                System.out.println("이미지를 읽을 수 없습니다.");
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
    }
}
