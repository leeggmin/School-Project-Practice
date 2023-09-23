package kr.project.sii.domain.post.domain;

import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "post")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class Post {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    @CreatedDate
    private LocalDateTime createPostDateTime;

    @NotNull
    @Column(columnDefinition = "LONGTEXT")
    private String imgUrl;

    @NotNull
    @Column(columnDefinition = "MEDIUMTEXT", nullable = false)
    private String prompt;

    @Column(columnDefinition = "MEDIUMTEXT", nullable = false)
    private String negativePrompt;

    @Builder
    public Post(String prompt, String negativePrompt, String imgUrl) {
        this.prompt = prompt;
        this.negativePrompt = negativePrompt;
        this.imgUrl = imgUrl;
    }
}
