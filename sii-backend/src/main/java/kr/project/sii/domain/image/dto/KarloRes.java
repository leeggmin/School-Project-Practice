package kr.project.sii.domain.image.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class KarloRes {

    private String id;
    private String model_version;
    private List<Image> images;

    @Getter
    public static class Image {

        private String id;
        private String seed;
        private String image;
    }
}
