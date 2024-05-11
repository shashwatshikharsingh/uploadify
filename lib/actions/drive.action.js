'use server';

import clientPromise  from "../mongodb";
import { auth } from "@clerk/nextjs";


export async function setFilesData(key,fileName,fileLink) {
    try {
        const { userId } = await auth();
        let useractive = userId.toString();
        

        const client = await clientPromise;
        const db = client.db("uploaded_files");
        const files = await db.collection("files").insertOne({ key,useractive,fileName,fileLink });
        console.log(files);
    } catch (e) {
        console.error(e);
    }
}

export async function fetchFilesData() {

    try {
      const {userId } =  auth().toString();

      const client = await clientPromise;

      const db = client.db("uploaded_files");

      const files = await db.collection("files").find({ userid: userId }).toArray();

      const simpleFilesArray = files.map(data => ({
        _id: data._id.toString(),
        key: data.key,
        useractive: data.useractive.toString(),
        fileName: data.fileName.toString(),
        fileLink: data.fileLink.toString(),
      }));
    
      return simpleFilesArray;
    } catch (e) {
      console.error(e);
    }
  }