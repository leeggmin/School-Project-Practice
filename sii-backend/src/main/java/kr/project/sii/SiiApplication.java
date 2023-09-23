package kr.project.sii;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SiiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SiiApplication.class, args);
	}

}
