package kr.project.sii.domain.post.controller;

import kr.project.sii.domain.post.domain.Post;
import kr.project.sii.domain.post.dto.PostGenerateReq;
import kr.project.sii.domain.post.service.PostService;
import kr.project.sii.global.response.Response;
import kr.project.sii.global.response.ResponseData;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping
    public Response generate(@RequestBody PostGenerateReq postGenerateReq) {
        postService.generate(postGenerateReq.toEntity());
        return Response.of(HttpStatus.OK, "게시물 등록 성공");
    }

    @GetMapping
    public ResponseData<List<Post>> readAll() {
        return ResponseData.of(HttpStatus.OK, "전체 게시물 조회 성공", postService.findAll());
    }

    @GetMapping("/{postId}")
    public ResponseData<Post> readOne(@PathVariable("postId") Long postId) {
        return ResponseData.of(HttpStatus.OK, "단일 게시물 조회 성공", postService.findOne(postId));
    }
}
