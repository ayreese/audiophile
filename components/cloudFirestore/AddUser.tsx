// import 'firebase/firestore'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { collection, addDoc } from "firebase/firestore";
import { type } from "os";

interface user {
  name: string;
  email: string;
  password: string;
}

const AddUser = ({ name, email, password }: user) => {};

export default AddUser;
