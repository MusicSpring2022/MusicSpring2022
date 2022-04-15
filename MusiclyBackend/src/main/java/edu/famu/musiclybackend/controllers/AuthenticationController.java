package edu.famu.musiclybackend.controllers;

import edu.famu.musiclybackend.auth.models.FirebaseUser;
import edu.famu.musiclybackend.auth.services.SecurityService;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {

    protected final Log logger = LogFactory.getLog(this.getClass());


    //function to create user sessions and log user in
    @PostMapping("/session")
    public ResponseEntity createSession()
    {
        logger.info("Create session executed.");
        SecurityService securityService = new SecurityService();
        FirebaseUser customer = securityService.getUser();

        //return the customer object in JSON format
        return ResponseEntity.ok(Collections.singletonMap("User", customer));
    }
}
