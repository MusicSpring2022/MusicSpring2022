package edu.famu.musiclybackend.services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.musiclybackend.models.PlaylistID;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PlaylistIDService {
    public ArrayList<PlaylistID> retrieveItemsByCategory(String id) throws ExecutionException, InterruptedException {
        ArrayList<PlaylistID> list = new ArrayList<>();

        //database connection object
        Firestore db = FirestoreClient.getFirestore();

        //Allows us to make an async call to the database
        ApiFuture<QuerySnapshot> future = db.collectionGroup("PlaylistID").whereEqualTo("UserID", id).get();
        // future.get() blocks on response
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();


        for(QueryDocumentSnapshot document : documents)
        {
            list.add(document.toObject(PlaylistID.class));
        }

        return list;
    }

    public boolean setItemID(String id){
        return true;
    }


}
