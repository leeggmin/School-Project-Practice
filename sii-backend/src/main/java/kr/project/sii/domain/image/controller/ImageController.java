package kr.project.sii.domain.image.controller;

import kr.project.sii.domain.image.dto.ImageUrlRes;
import kr.project.sii.domain.image.dto.KarloReq;
import kr.project.sii.domain.image.service.ImageService;
import kr.project.sii.global.response.ResponseData;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/image")
public class ImageController {

    private final ImageService imageService;

    @PostMapping
    public ResponseData<ImageUrlRes> generateImage(@RequestBody KarloReq karloReq) {
        return ResponseData.of(HttpStatus.OK, "이미지 생성 성공", new ImageUrlRes(imageService.generateImage(karloReq)));
    }
}
