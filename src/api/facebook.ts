export const getFacebookProfile = async (token: string) => {
  const res = await fetch(
    `https://graph.facebook.com/me?access_token=${token}&fields=email`
  );
  return res.json();
};
