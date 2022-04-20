package edu.famu.musiclybackend.controllers;

import edu.famu.musiclybackend.models.PlaylistID;
import org.springframework.web.bind.annotation.*;
import edu.famu.musiclybackend.services.PlaylistIDService;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@RequestMapping("/api/PlaylistID")
@RestController
public class PlaylistIDController {

    PlaylistIDService playlistIDService;

    public PlaylistIDController(PlaylistIDService service) {
        this.playlistIDService = service;
    }

    //Get menu items by category id
    @GetMapping("/{UserID}")
    public ArrayList<PlaylistID> getMenuItemsByCategory(@PathVariable(name="UserID") String UserID) throws ExecutionException, InterruptedException {
        return playlistIDService.retrieveItemsByCategory(UserID);
    }


//    @PostMapping("/{UserID}/{PlaylistItems}")
//
}
