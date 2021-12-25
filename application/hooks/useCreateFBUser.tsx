import { addDoc, collection } from "firebase/firestore/lite";
import React, { useState } from "react";
import db from "../../infrastructure/firebase/config";

//hook to create an user on firestore
export const useCreateFBUser = (email: string, userName: string) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    try {
      setLoading(true);
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        email: email,
        userName: userName,
      });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, createUser };
};
