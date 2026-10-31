export default function setCookiesOnReq(cookieStore) {
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  const cookieHeader = [
    accessToken && `${accessToken.name}=${accessToken.value}`,
    refreshToken && `${refreshToken.name}=${refreshToken.value}`,
  ]
    .filter(Boolean)
    .join("; ");

  return {
    headers: {
      Cookie: cookieHeader,
    },
  };
}