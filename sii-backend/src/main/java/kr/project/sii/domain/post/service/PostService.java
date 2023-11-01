package kr.project.sii.domain.post.service;

import kr.project.sii.domain.post.domain.Post;
import kr.project.sii.domain.post.repository.PostRepository;
import kr.project.sii.global.error.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    @Transactional
    public void generate(Post postSubmitDto) {
        postRepository.save(postSubmitDto);
    }

    public List<Post> findAll() {
        return postRepository.findAllByOrderByCreatePostDateTimeDesc();
    }

    public Post findOne(Long postId) {
        return postRepository.findById(postId)
                .orElseThrow(ResourceNotFoundException::new);
    }

    public List<Post> findAllByLikes() {
        return postRepository.findAllByOrderByLikesDesc();
    }
}
