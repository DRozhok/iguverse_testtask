export const getGoogleProfile = async (token: string) => {
  const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.json();
};
