import FirebaseAdmin from "@lib/FirebaseAdmin";
import { z } from "zod";

// Helper Function
const FirebaseTimestamp = z.union([
  z.instanceof(FirebaseAdmin.firestore.Timestamp),
  z.date(),
  z.custom((val) => val === FirebaseAdmin.firestore.FieldValue.serverTimestamp(), { message: "Expected serverTimestamp()" }),
]);
