import { printLog } from "./printLog";
import { auth } from "./auth";
import { addRequestId } from "./adReuqestId";
const mls = [printLog, auth, addRequestId]; // do this 
const mlsNames = { printLog, auth, addRequestId }; // or this 
export { mls, mlsNames }; // not both!
