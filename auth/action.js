const axios = require("axios");

exports.onExecutePostLogin = async (event, api) => {
  // ユーザーが存在しない場合は作成する
  const userId = event.user.user_id;
  const userName = event.user.name || "";
  const userNickName = event.user.nickname || "";
  const picture = event.user.picture || "";
  const email = event.user.email;
  const body = "";

  const user = {
    auth0_id: userId,
    name: userName,
    nickname: userNickName,
    picture: picture,
    email: email,
    body: body,
  };

  // NOTE: 本来であれば、getで404を確認して、存在しない場合は作成する
  // しかしながら、Auth0は２回目以降のリクエストを実行してくれないみたいなので一回のリクエストで済ます
  const apiUrl = event.secrets.API_URL;
  axios.post(`${apiUrl}auth0/user`, user);
};
