package edu.famu.musiclybackend.controllers;

import edu.famu.musiclybackend.models.PlaylistID;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.web.bind.annotation.*;
import edu.famu.musiclybackend.services.PlaylistIDService;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@RequestMapping("/api/PlaylistID")
@RestController
public class PlaylistIDController {

    PlaylistIDService playlistIDService;
    protected final Log logger = LogFactory.getLog(this.getClass());


    public PlaylistIDController(PlaylistIDService service) {
        this.playlistIDService = service;
    }

    //Get menu items by category id
    @GetMapping("/{userID}")
    public ArrayList<PlaylistID> getMenuItemsByCategory(@PathVariable(name="userID") String ID) throws ExecutionException, InterruptedException {
        logger.info(ID);
        return playlistIDService.retrieveItemsByCategory(ID);
    }


    @PostMapping("/{UserID}/{PlaylistItems}")
    public boolean setItemID(@PathVariable(name="UserID") String uid, @PathVariable(name="PlaylistItems")String id) throws ExecutionException, InterruptedException {
        return playlistIDService.setItemID(id, uid);
    }

}
