export const onRequest = async (context) => {
  const url = new URL(context.request.url);

  if (url.hostname.endsWith(".pages.dev")) {
    const target = new URL(url.pathname + url.search, "https://verityclient.com");
    return Response.redirect(target.toString(), 301);
  }

  return context.next();
};
