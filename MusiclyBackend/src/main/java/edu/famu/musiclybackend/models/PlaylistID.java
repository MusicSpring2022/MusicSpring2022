package edu.famu.musiclybackend.models;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Data //creates setters and getters automatically
@AllArgsConstructor //creates constructor with all values automatically
@NoArgsConstructor //creates no argument constructor automatically
public class PlaylistID {

    @DocumentId //denotes that the variable is storing the document id value
    private String id;
    private String UserID;
    private ArrayList<String> PlaylistItems;
}
