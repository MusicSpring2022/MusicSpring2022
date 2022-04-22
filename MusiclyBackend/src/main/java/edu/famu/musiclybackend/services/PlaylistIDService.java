package edu.famu.musiclybackend.services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.cloud.firestore.annotation.PropertyName;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.musiclybackend.models.PlaylistID;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PlaylistIDService {
    protected final Log logger = LogFactory.getLog(this.getClass());


    public ArrayList<PlaylistID> retrieveItemsByCategory(String id) throws ExecutionException, InterruptedException {

        logger.info(id);
        ArrayList<PlaylistID> list = new ArrayList<>();

        //database connection object
        Firestore db = FirestoreClient.getFirestore();

        //Allows us to make an async call to the database
        ApiFuture<QuerySnapshot> future = db.collectionGroup("PlaylistID").whereEqualTo("userID", id).get();
        // future.get() blocks on response
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();


        for(QueryDocumentSnapshot document : documents)
        {
            list.add(document.toObject(PlaylistID.class));
        }

        return list;
    }

    public boolean setItemID(String id, String uid) throws ExecutionException, InterruptedException {

        Firestore db = FirestoreClient.getFirestore();

        ArrayList<PlaylistID> list = retrieveItemsByCategory(uid);

        logger.info(uid);
        if(!list.isEmpty()){
            ArrayList<String> listMusic = list.get(0).getPlaylistItems();
            listMusic.add(id);
            list.get(0).setPlaylistItems(listMusic);
            ApiFuture<WriteResult> future = db.collection("PlaylistID").document(list.get(0).getId()).set(list.get(0));
            future.get();
        }
        else{
            return false;
        }



        return true;
    }


}
