import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
	UserPoolId: "us-east-2_k228oWALs",
	ClientId: "1giihh3kq98uri9bj2lv1pans3"
}

const userPool = new CognitoUserPool(poolData);

export default userPool;