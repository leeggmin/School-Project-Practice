package kr.project.sii.domain.post.dto;

import kr.project.sii.domain.image.dto.KarloReq;
import kr.project.sii.domain.post.domain.Post;
import lombok.Getter;

@Getter
public class PostGenerateReq {

    private KarloReq imgPrompt;
    private String imgUrl;

    public Post toEntity() {
        return Post.builder()
                .prompt(imgPrompt.getPrompt())
                .negativePrompt(imgPrompt.getNegative_prompt())
                .imgUrl(imgUrl)
                .build();
    }
}
