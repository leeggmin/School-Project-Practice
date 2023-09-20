package kr.project.sii.domain.image.controller;

import kr.project.sii.domain.image.dto.KarloReq;
import kr.project.sii.domain.image.service.ImageService;
import lombok.RequiredArgsConstructor;
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
    public void generateImage(@RequestBody KarloReq karloReq) {
        imageService.generateImage(karloReq);
    }
}
