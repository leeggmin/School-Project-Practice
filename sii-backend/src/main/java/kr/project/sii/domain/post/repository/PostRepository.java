package kr.project.sii.domain.post.repository;

import kr.project.sii.domain.post.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findAllByOrderByCreatePostDateTimeDesc();
    List<Post> findAllByOrderByLikesDesc();
}
